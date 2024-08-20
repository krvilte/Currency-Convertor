import React, { useState, useEffect } from 'react';

function useCurrencyName(currency) {
  const [currNames, setCurrNames] = useState({});

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
    )
      .then((res) => res.json())
      .then((currNames) => setCurrNames(currNames));
  }, [currency]);

  console.log(currNames);
  return currNames;
}

export default useCurrencyName;
