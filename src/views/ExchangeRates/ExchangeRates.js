// import { useEffect } from 'react'

const ExchangeRates = ({ currencyOptions, baseCurrency, baseChange }) => {
  const currencyArr = Object.entries(currencyOptions)
  console.log(currencyArr)

  const handleFromCurrencyChange = (e) => {
    baseChange(e.target.value)
  }

  return (
    <>
      <select onChange={handleFromCurrencyChange} value={baseCurrency}>
        {currencyOptions &&
          [...Object.keys(currencyOptions)].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
      </select>
      {currencyArr &&
        currencyArr.map((currency) => (
          <p key={currency[0]}>
            {currency[0]} = {currency[1]}
          </p>
        ))}
    </>
  )
}

export default ExchangeRates
