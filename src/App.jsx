import React, { useEffect, useState } from 'react'
import InputPanel from './components/InputPanel'
import useCurrencyValue from './customHooks/useCurrencyValue'

function App() {
  const [amount, setAmount] = useState();
  const [convertFrom, setConvertFrom] = useState("inr");
  const [convertTo, setConvertTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currValue = useCurrencyValue(convertFrom)
  const options = Object.keys(currValue[0]);

  //Swap
  
  useEffect(()=>{
    setConvertedAmount(amount*(currValue[0])[convertTo])
  },[amount ,convertFrom, convertTo])

  return (
    <div>
      <h1 className="">Currency Convertor</h1>

      <InputPanel theme = ""
                  label="From"
                  amount={amount}
                  currCodes={options}
                  onAmoutnChange={amount=>setAmount(amount)}
                  onCurrencyChange={curr=>setConvertFrom(curr)} 
                  selectedCurrency={convertFrom}/>

      <InputPanel theme = ""
                  label="To"
                  amount={convertedAmount?? 0}
                  currCodes={options}
                  amountDesable={true}
                  onCurrencyChange={curr=>setConvertTo(curr)} 
                  selectedCurrency={convertTo}/>
    </div>
  )
}

export default App
