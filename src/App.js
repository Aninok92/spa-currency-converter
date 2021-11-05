import './App.css'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import detectBrowserLanguage from 'detect-browser-language'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import fetchCurrency from './services/currency-api'
import CurrencyConverter from './views/CurrencyConverter/CurrencyConverter'
import ExchangeRates from './views/ExchangeRates/ExchangeRates'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({})
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
        <Route path="/" exact>
          <CurrencyConverter
            currencyOptions={currencyOptions}
            baseCurrency={baseCurrency}
            fromCurrencyChange={handleFromCurrencyChange}
          />
        </Route>
        <Route path="/current">
          <ExchangeRates
            currencyOptions={currencyOptions}
            baseCurrency={baseCurrency}
            baseChange={handleBaseChange}
          />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
