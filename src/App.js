import './App.css'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import detectBrowserLanguage from 'detect-browser-language'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import fetchCurrency from './services/currency-api'
import Loader from './components/Loader/Loader'

const CurrencyConverter = lazy(() =>
  import(
    './views/CurrencyConverter/CurrencyConverter' /* webpackChunkName: "CurrencyConverter" */
  )
)

const ExchangeRates = lazy(() =>
  import(
    './views/ExchangeRates/ExchangeRates' /* webpackChunkName: "ExchangeRates" */
  )
)

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState(detectBrowserLanguage())
  const [baseCurrency, setBaseCurrency] = useState('')

  useEffect(() => {
    if (!baseCurrency) {
      return
    }

    fetchCurrency(baseCurrency)
      .then((results) => {
        setCurrencyOptions(results.exchange_rates)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [baseCurrency])

  useEffect(() => {
    switch (language) {
      case 'ru':
        setBaseCurrency('RUB')
        break
      default:
        setBaseCurrency('EUR')
    }
  }, [language])

  const handleFromCurrencyChange = (value) => {
    setBaseCurrency(value)
  }

  const handleBaseChange = (value) => {
    setBaseCurrency(value)
  }
  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact>
            <CurrencyConverter
              currencyOptions={currencyOptions}
              baseCurrency={baseCurrency}
              fromCurrencyChange={handleFromCurrencyChange}
            />
          </Route>
          <Route path="/rates">
            <ExchangeRates
              currencyOptions={currencyOptions}
              baseCurrency={baseCurrency}
              baseChange={handleBaseChange}
            />
          </Route>
        </Suspense>
      </Switch>
    </Container>
  )
}

export default App
