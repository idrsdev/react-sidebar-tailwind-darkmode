import React from "react";
import CoinList from "../CoinList";
import SearchableDropdown from "../SearchableDropdown";
import AccountList from "../AccountList";
import TradeForm from "../TradeForm";
import SignalsTable from "../components/SignalsTable";

const Dashboard = () => {
  return (
    <div className="dark:text-white w-full h-full flex">
      Dashboard
      <div>
        <SignalsTable />
      </div>
      <div className=" ">
        <TradeForm />
        {/* <AccountList /> */}
      </div>
    </div>
  );
};

export default Dashboard;
