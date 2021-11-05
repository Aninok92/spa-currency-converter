import CurrencyList from '../../components/CurrencyList/CurrencyList'
import Option from '../../components/Option/Option'
import PropTypes from 'prop-types'
import s from './ExchangeRates.module.scss'

const ExchangeRates = ({ currencyOptions, baseCurrency, baseChange }) => {
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

ExchangeRates.defaulProps = {
  baseChange: () => null,
}

ExchangeRates.propTypes = {
  currencyOptions: PropTypes.object.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  baseChange: PropTypes.func,
}

export default ExchangeRates
