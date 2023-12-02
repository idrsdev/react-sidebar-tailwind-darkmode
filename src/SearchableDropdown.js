// SearchableDropdown.tsx
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getPairData, getSpotTradingPairs } from "./BinanceService";

const SearchableDropdown = ({ selectedPair, setSelectedPair }) => {
  const [pairs, setPairs] = useState([]);
  const [pairData, setPairData] = useState(null);
  useEffect(() => {
    const fetchPairs = async () => {
      try {
        const pairList = await getSpotTradingPairs();
        setPairs(pairList.map((pair) => ({ value: pair, label: pair })));
      } catch (error) {
        console.error("Failed to fetch pairs", error);
      }
    };

    fetchPairs();
  }, []);
  const handleChange = async (selectedOption) => {
    setSelectedPair(selectedOption.value);
    try {
      const data = await getPairData(selectedOption.value);
      setPairData(data);
    } catch (error) {
      console.error("Failed to fetch data for pair", error);
    }
  };

  return (
    <div className="shrink w-fit text-green-500">
      <Select
        options={pairs}
        className="bg-gray-200 text-black"
        onChange={handleChange}
        placeholder="Select a trading pair..."
        isSearchable={true}
      />
      {selectedPair && <div>You selected: {selectedPair}</div>}
      {pairData && (
        <>
          <p>Price Change: {pairData.priceChange}</p>
          <p>Volume: {pairData.volume}</p>
        </>
      )}
    </div>
  );
};

export default SearchableDropdown;
