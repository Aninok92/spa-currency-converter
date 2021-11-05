import axios from 'axios'

axios.defaults.baseURL = 'https://exchange-rates.abstractapi.com/v1/live'

const API_KEY = '1cc6c214cc1840d7a6b8690b9bef327d'
const target = 'RUB,EUR,USD'

const fetchCurrency = async (baseCurrency) => {
  const response = await axios.get(
    `?api_key=${API_KEY}&base=${baseCurrency}&target=${target}`
  )
  return response.data
}

export default fetchCurrency
