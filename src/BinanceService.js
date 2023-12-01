import axios from 'axios';

const BASE_URL = 'https://api.binance.com';

export const getSpotCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/exchangeInfo`);
    return response.data.symbols
      .filter((symbol) => symbol.status === 'TRADING' && symbol.isSpotTradingAllowed)
      .map((symbol) => symbol.baseAsset);
  } catch (error) {
    console.error('Error fetching spot coins from Binance', error);
    throw error;
  }
};

export const getSpotTradingPairs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/exchangeInfo`);
    return response.data.symbols
      .filter((symbol) => symbol.status === 'TRADING' && symbol.isSpotTradingAllowed)
      .map((symbol) => `${symbol.baseAsset}/${symbol.quoteAsset}`);
  } catch (error) {
    console.error('Error fetching spot trading pairs from Binance', error);
    throw error;
  }
};



export const getPairData = async (pair) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/ticker/24hr`, { params: { symbol: pair.replace("/", "") } });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for pair ${pair}`, error);
    throw error;
  }
};

const TELEGRAM_API = `https://api.telegram.org/bot6607742210:AAGAT1dm5vGUlBBeXdBTp0oqToYNYVEVAUM`;
const TELEGRAM_CHAT_ID = '-1002055987922';

export const sendMessageToTelegram = async (message) => {
  try {
    const formattedMessage = `${message}`;
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: formattedMessage,
      parse_mode: 'Markdown',
    });
    console.log('Message sent to Telegram successfully');
  } catch (error) {
    console.error('Error sending message to Telegram', error);
    throw error;
  }
};