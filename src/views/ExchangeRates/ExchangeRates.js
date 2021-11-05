// import { useEffect } from 'react'
import CurrencyList from '../../components/CurrencyList/CurrencyList'
import Option from '../../components/Option/Option'
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
        {currencyOptions && <Option currencyOptions={currencyOptions} />}
      </select>
      {currencyOptions && <CurrencyList currencyOptions={currencyOptions} />}
    </div>
  )
}

export default ExchangeRates
