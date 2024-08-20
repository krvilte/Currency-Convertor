import React, { useState, useEffect } from 'react';

function useCurrencyName(currCode) {
  const [currNames, setCurrNames] = useState({});

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrNames(data);
      });
  }, [currCode]);

  return [currNames];
}

export default useCurrencyName;
