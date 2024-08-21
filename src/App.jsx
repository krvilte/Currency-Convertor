import React, { useEffect, useState } from 'react'
import InputPanel from './components/InputPanel'
import useCurrencyValue from './customHooks/useCurrencyValue'
import useCurrencyName from './customHooks/useCurrencyName';

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
    console.log("Amount Modified")
  },[amount, convertFrom, convertTo])

  return (
    <div>
      <h1 className="">Currency Convertor</h1>

      <InputPanel theme = ""
                  label="From"
                  amount={amount}
                  currCodes={options}
                  onAmoutnChange={amount=>setAmount(amount)}
                  onCurrencyChange={curr=>setConvertFrom(curr)} 
                  selectedCurrency={convertFrom}
                  currName={currencyFrom}/>

      <button className=''
              onClick={swap}>
              Swap</button>

      <InputPanel theme = ""
                  label="To"
                  amount={convertedAmount?? 0}
                  currCodes={options}
                  amountDesable={true}
                  onCurrencyChange={curr=>setConvertTo(curr)} 
                  selectedCurrency={convertTo}
                  currName={currencyTo}/>
    </div>
  )
}

export default App
