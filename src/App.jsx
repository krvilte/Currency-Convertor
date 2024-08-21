import React, { useEffect, useState } from 'react'
import InputPanel from './components/InputPanel'
import useCurrencyValue from './customHooks/useCurrencyValue'
import useCurrencyName from './customHooks/useCurrencyName';
import { MdSwapVerticalCircle } from "react-icons/md";


function App() {
  const [amount, setAmount] = useState();
  const [convertFrom, setConvertFrom] = useState("inr");
  const [convertTo, setConvertTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();

  //Changing currency Names
  const currencyNames = useCurrencyName(convertFrom)
  const currencyFrom = currencyNames[0][convertFrom]
  const currencyTo = currencyNames[0][convertTo]

  //Currency Value Options 
  const currValue = useCurrencyValue(convertFrom)
  const options = Object.keys(currValue[0]);

  //Swap
  const swap = ()=>{
    setConvertFrom(convertTo)
    setConvertTo(convertFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  useEffect(()=>{
    setConvertedAmount(amount*(currValue[0])[convertTo])
  },[amount, convertFrom, convertTo])

  return (
    <div className='h-screen flex items-center justify-center flex-col bg-gray-900'>
      <h1 className="text-2xl font-mono font-bold text-gray-200 my-3  ">Currency Convertor</h1>
      <div className='flex flex-col gap-1'>
        <InputPanel theme = "bg-gray-200 p-8 font-mono text-lg w-full rounded"
                      label="From"
                      amount={amount}
                      currCodes={options}
                      onAmoutnChange={amount=>setAmount(amount)}
                      onCurrencyChange={curr=>setConvertFrom(curr)} 
                      selectedCurrency={convertFrom}
                      currName={currencyFrom}/>

          <InputPanel theme = "bg-red-400 p-8 font-mono text-lg w-full rounded"
                      label="To"
                      amount={convertedAmount?? 0}
                      currCodes={options}
                      amountDesable={true}
                      onCurrencyChange={curr=>setConvertTo(curr)} 
                      selectedCurrency={convertTo}
                      currName={currencyTo}/>

          <button className='text-gray-600 bg-white text-4xl m-auto relative bottom-2/4 rounded-full hover:text-blue-600'
                  onClick={swap}>
                    <MdSwapVerticalCircle />

          </button>
      </div>
    </div>
  )
}

export default App
