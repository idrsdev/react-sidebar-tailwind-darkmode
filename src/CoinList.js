// CoinPairList.tsx
import React, { useState, useEffect } from 'react';
import { getSpotTradingPairs } from './BinanceService';

const CoinList = () => {
  const [pairs, setPairs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPairs = async () => {
      try {
        const pairList = await getSpotTradingPairs();
        setPairs(pairList);
      } catch (error) {
        console.error('Failed to fetch pairs', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPairs();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Spot Market Trading Pairs</h1>
      <ul>
        {pairs.map((pair, index) => (
          <li key={index}>{pair}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
