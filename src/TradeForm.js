// TradeForm.tsx
import React, { useState } from 'react';
import SearchableDropdown from './SearchableDropdown';
import { sendMessageToTelegram } from './BinanceService';

const TradeForm = () => {
  const [formData, setFormData] = useState({
    coin: '',
    buyPrice: '',
    sellT1: '',
    sellT2: '',
    stopLoss: '',
    extraData: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageHtml = `
      <b>Coin:</b> ${formData.coin || 'N/A'}<br>
      <b>Buy Price:</b> ${formData.buyPrice || 'N/A'}<br>
      <b>Sell T1:</b> ${formData.sellT1 || 'N/A'}<br>
      <b>Sell T2:</b> ${formData.sellT2 || 'N/A'}<br>
      <b>Stop Loss:</b> ${formData.stopLoss || 'N/A'}<br>
      <b>Extra Data:</b> ${formData.extraData || 'N/A'}
    `;
  
    try {
      await sendMessageToTelegram(messageHtml);
      console.log('Message sent to Telegram');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex justify-center pb-8">
        <SearchableDropdown /> 
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buyPrice">
            Buy Price
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="buyPrice" name="buyPrice" value={formData.buyPrice} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellT1">
            Sell T1
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="sellT1" name="sellT1" value={formData.sellT1} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellT2">
            Sell T2
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="sellT2" name="sellT2" value={formData.sellT2} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stopLoss">
            Stop Loss
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="stopLoss" name="stopLoss" value={formData.stopLoss} onChange={handleChange} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="extraData">
            Extra Data
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="extraData" name="extraData" value={formData.extraData} onChange={handleChange} />
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
          onClick={(e)=>{ 
            console.log('eeeeeeeeeee' ,formData.toString() )
            sendMessageToTelegram(formData.toString())}}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
