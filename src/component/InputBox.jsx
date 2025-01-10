import React from 'react';

function InputBox ({ 
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className ="",
 }) {


  return (
    <div className={'flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-full ${className}'}>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
          type="number"
          value={amount}
          // disabled = {amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //check if value already exits or not
          className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Amount"
        />
      </div>
      <div className="ml-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Currency Type</label>
        <select
          value={selectCurrency}
          // disabled = {currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}> {currency}</option>
          ))}

        </select>
      </div>
    </div>
  );
};

export default InputBox;
