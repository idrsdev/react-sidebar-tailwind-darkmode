// TradesTable.js
import React, { useState } from "react";
import { getPairData } from "../BinanceService";
import { useNavigate } from "react-router-dom";

const SignalsTable = () => {
  const [trades, setTrades] = useState([
    {
      id: 1,
      pair: "BTC/USDT",
      buyedPrice: "50000",
      sellPrice: null,
      status: "Open",
    },
    {
      id: 2,
      pair: "ETH/USD",
      buyedPrice: "4000",
      sellPrice: "4500",
      status: "Closed",
    },
    // ... more trades
  ]);

  const navigate = useNavigate();

  const handleClose = async (tradeId) => {
    navigate("/anes/");
    try {
      const tradeToClose = trades.find((trade) => trade.id === tradeId);
      if (tradeToClose) {
        const pairData = await getPairData(tradeToClose.pair.replace("/", ""));
        const currentPrice = pairData.lastPrice;

        const updatedTrades = trades.map((trade) =>
          trade.id === tradeId
            ? { ...trade, status: "Closed", sellPrice: currentPrice }
            : trade
        );

        setTrades(updatedTrades);
      }
    } catch (error) {
      console.error(`Error fetching data for pair or updating trade:`, error);
    }
  };

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Pair</th>
          <th className="py-3 px-6 text-left">Buy Price</th>
          <th className="py-3 px-6 text-left">Sell Price</th>
          <th className="py-3 px-6 text-left">Profit/Loss</th>
          <th className="py-3 px-6 text-center">Status</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 bg-blue-100 text-sm font-light">
        {trades.map((trade) => (
          <tr
            key={trade.id}
            className="border-b border-gray-200 hover:bg-gray-100"
          >
            <td className="py-3 px-6 text-left whitespace-nowrap">
              {trade.pair}
            </td>
            <td className="py-3 px-6 text-left">{trade.buyedPrice}</td>
            <td className="py-3 px-6 text-left">{trade.sellPrice || "-"}</td>
            <td className="py-3 px-6 text-left">
              {trade.status === "Closed" && trade.sellPrice
                ? (
                    parseFloat(trade.sellPrice) - parseFloat(trade.buyedPrice)
                  ).toFixed(2)
                : "-"}
            </td>
            <td className="py-3 px-6 text-center">
              <span
                className={`${
                  trade.status === "Open" ? "text-red-500" : "text-green-500"
                } font-bold`}
              >
                {trade.status}
              </span>
            </td>

            <td className="py-3 px-6 text-center">
              {trade.status === "Open" && (
                <button
                  onClick={() => handleClose(trade.id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Close
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SignalsTable;
