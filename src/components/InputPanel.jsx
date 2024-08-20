import { useId } from "react";

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
  currNames=[],
}){


  const amountID = useId() 
  const currencyId = useId() 
  return (
    <div className={theme}>
      <div className="">
        <label htmlFor={amountID}>{label}</label>
        <input className= ""
               id={amountID}
               type="number" 
               name="amount"
               placeholder="Amount"
               value={amount} 
               desabled ={amountDesable}
               onChange={(e)=>onAmoutnChange(e.target.value)}
               />
      </div>

      <div>
        <label className='' 
               htmlFor={currencyId}>
          Currency Name
        </label>

        <select name="currency" 
                id={currencyId}
                value={selectedCurrency}
                onChange={(e)=>{
                  let currCode = e.target.value;
                  onCurrencyChange(currCode)
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
  )
}

export default InputPanel
