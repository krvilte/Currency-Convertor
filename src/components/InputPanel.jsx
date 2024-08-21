import { useId, useState } from "react";
// import useCurrencyName from '../customHooks/useCurrencyName';


function InputPanel({
  theme, 
  label,
  amount,
  amountDesable = false,
  currencyDesable = false,
  onAmoutnChange,
  onCurrencyChange,
  selectedCurrency="usd",
  currCodes= [],
  currName,
}){

  const amountID = useId() 
  const currencyId = useId() 

  return (
    <div className= {theme}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mr-3">
          <label htmlFor={amountID}
                 className="font-bold text-lg">{label}</label>
            <input className= "p-1 text-lg rounded h-10 border border-black"
                id={amountID}
                type="number" 
                name="amount"
                placeholder="Amount"
                value={amount} 
                desabled ={amountDesable}
                onChange={(e)=>onAmoutnChange(e.target.value)}
                />
        </div>

        <div className="flex flex-col justify-items-end">
          <label htmlFor={currencyId} 
                 className="font-bold text-end">
            {currName === ""? "Currency Type": currName}
          </label>

          <select className="max-w-28 self-end rounded h-10 text-lg border border-black"
                  name="currency" 
                  id={currencyId}
                  value={selectedCurrency}
                  onChange={(e)=>{
                    let code = e.target.value;
                    onCurrencyChange(code)
                  }}
                  desabled={currencyDesable}>
                  
                  {currCodes.map((code, index)=>{
                    return <option value={code}
                            key={index}>
                            {code}</option>
                  })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputPanel
