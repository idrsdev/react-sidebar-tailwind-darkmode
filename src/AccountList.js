import React, { useState } from "react";

const AccountList = () => {
  const initialAccounts = [
    { name: "Account1", selected: false },
    { name: "Account2", selected: false },
    { name: "Account3", selected: false },
  ];

  const [accounts, setAccounts] = useState(initialAccounts);

  const handleCheckboxChange = (index) => {
    const newAccounts = accounts.map((account, i) => {
      if (i === index) {
        return { ...account, selected: !account.selected };
      }
      return account;
    });
    setAccounts(newAccounts);
  };

  return (
    <div className=" bg-violet-500 max-w-sm rounded-2xl  flex">
      <div className="m-4 p-4">
        {accounts.map((account, index) => (
          <div key={account.name}>
            <input
              type="checkbox"
              checked={account.selected}
              onChange={() => handleCheckboxChange(index)}
            />
            {account.name}
          </div>
        ))}
      </div>
      {/* <div>
        <strong>Selected Accounts:</strong>
        <pre>{JSON.stringify(accounts, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default AccountList;
