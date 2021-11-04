import './App.css'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import detectBrowserLanguage from 'detect-browser-language'
import Container from './components/Container/Container'
import AppBar from './components/AppBar/AppBar'
import fetchCurrency from './services/currency-api'
import CurrencyConverter from './views/CurrencyConverter/CurrencyConverter'
import ExchangeRates from './views/ExchangeRates/ExchangeRates'

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({})
  const [status, setStatus] = useState(Status.IDLE)
  const [language, setLanguage] = useState(detectBrowserLanguage())
  const [baseCurrency, setBaseCurrency] = useState('')

  useEffect(() => {
    if (!baseCurrency) {
      return
    }
    setStatus(Status.PENDING)

    fetchCurrency(baseCurrency)
      .then((results) => {
        setCurrencyOptions(results.exchange_rates)
        setStatus(Status.RESOLVED)
      })
      .catch((error) => {
        setStatus(Status.REJECTED)
        console.log(error)
      })
  }, [baseCurrency])

  console.log(baseCurrency)

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
          {/* {status === Status.PENDING && <Loader />}  */}
          <CurrencyConverter
            currencyOptions={currencyOptions}
            baseCurrency={baseCurrency}
            fromCurrencyChange={handleFromCurrencyChange}
          />
          {status === Status.REJECTED && <p>something wrong</p>}
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
