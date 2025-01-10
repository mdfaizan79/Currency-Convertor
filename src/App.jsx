import React, { useState } from 'react';
import InputBox from './component/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  };

  
  return (
    <div
  className="h-screen flex items-center justify-center bg-gray-100"
  style={{
    backgroundImage: `url("https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=600")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <InputBox
          amount={amount}
          currencyOption = {options}
          onCurrencyChange = {(currency) => setAmount(amount)
          }
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
          label="From"
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-blue-600"
          onClick={swap}
        >
          swap
        </button>
        <InputBox
          amount={convertedAmount}
          currencyOption = {options}
          onCurrencyChange = {(currency) => setTo(currency)
          }
        
          selectCurrency={to}
          label="To"
          amountDisable
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default App;
