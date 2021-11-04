import { useState } from 'react'
import s from './CurrencyConverter.module.scss'

const CurrencyConverter = ({
  currencyOptions,
  baseCurrency,
  fromCurrencyChange,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [toCurrency, setToCurrency] = useState('RUB')

  console.log('toCer', toCurrency)

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value)
  }

  const handleFromCurrencyChange = (e) => {
    fromCurrencyChange(e.target.value)
  }

  const handleExchangeQuantity = () => {
    const targetQuantityArr = Object.entries(currencyOptions).find(
      ([key, _]) => key === toCurrency
    )
    const targetQuantity = targetQuantityArr ? targetQuantityArr[1] : 1
    return quantity * targetQuantity
  }
  const exchangeQuantity = handleExchangeQuantity()

  return (
    <>
      <div className={s.container}>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            min="1"
            value={quantity}
            onChange={onChangeQuantity}
          />
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
        </div>

        <div className={s.equal}>=</div>

        <div className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            value={exchangeQuantity}
            disabled
          />
          <select
            className={s.select}
            onChange={handleToCurrencyChange}
            value={toCurrency}
          >
            {currencyOptions &&
              [...Object.keys(currencyOptions)].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter

// const targetQuantityArr = Object.entries(currencyOptions).find(
//   ([key, _]) => key === toCurrency
// )
// const targetQuantity = targetQuantityArr ? targetQuantityArr[1] : 1
// const exchangeQuantity = quantity * targetQuantity
