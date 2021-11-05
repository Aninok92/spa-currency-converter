// import { useEffect } from 'react'
import CurrencyList from '../../components/CurrencyList/CurrencyList'
import s from './ExchangeRates.module.scss'

const ExchangeRates = ({ currencyOptions, baseCurrency, baseChange }) => {
  const currencyArr = Object.entries(currencyOptions)
  console.log(currencyArr)

  const handleFromCurrencyChange = (e) => {
    baseChange(e.target.value)
  }

  return (
    <div className={s.wrapper}>
      <select
        className={s.select}
        onChange={handleFromCurrencyChange}
        value={baseCurrency}
      >
        {currencyOptions &&
          [...Object.keys(currencyOptions)].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
      </select>
      {currencyOptions && <CurrencyList currencyOptions={currencyOptions} />}
    </div>
  )
}

export default ExchangeRates
