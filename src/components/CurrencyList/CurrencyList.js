import s from './CurrencyList.module.scss'

const CurrencyList = ({ currencyOptions }) => {
  const currencyArr = Object.entries(currencyOptions)
  return (
    <ul className={s.list}>
      {currencyArr.map((currency) => {
        const name = currency[0]
        const value = currency[1]
        return (
          <li key={name} className={value !== 1 ? s.item : s.item_base}>
            {name} = {Math.floor(value * 1000) / 1000}
          </li>
        )
      })}
    </ul>
  )
}

export default CurrencyList
