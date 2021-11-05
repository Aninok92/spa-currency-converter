import { useState } from 'react'
import s from './CurrencyConverter.module.scss'
import Input from '../../components/Input/Input'

const CurrencyConverter = ({
  currencyOptions,
  baseCurrency,
  fromCurrencyChange,
}) => {
  const [quantity, setQuantity] = useState(100)
  const [toCurrency, setToCurrency] = useState('RUB')

  const onChangeQuantity = (newQuantity) => {
    setQuantity(newQuantity)
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
    const convertQuantity = quantity * targetQuantity
    return Math.floor(convertQuantity * 1000) / 1000
  }
  const exchangeQuantity = handleExchangeQuantity()

  return (
    <>
      <div className={s.container}>
        <div className={s.inputWrapper}>
          <Input
            value={quantity}
            changeNewQuantity={onChangeQuantity}
            disabled={false}
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
          <Input value={exchangeQuantity} disabled={true} />
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
