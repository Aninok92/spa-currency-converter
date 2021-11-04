// import axios from 'axios'

// axios.defaults.baseURL = 'https://freecurrencyapi.net/api/v2/'

// const API_KEY = '4b83c1b0-3c88-11ec-8105-9702454a93a1'

// const fetchCurrency = async (baseCurrency) => {
//   const response = await axios.get(
//     `latest?apikey=${API_KEY}&base_currency=${baseCurrency}`
//   )
//   console.log(response.data)
//   return response.data
// }

// export default fetchCurrency

import axios from 'axios'

axios.defaults.baseURL = 'https://exchange-rates.abstractapi.com/v1/live'

const API_KEY = 'adef8d72b2cb41e5974976dd554969d9'
const target = 'RUB,EUR,USD'

const fetchCurrency = async (baseCurrency) => {
  const response = await axios.get(
    `?api_key=${API_KEY}&base=${baseCurrency}&target=${target}`
  )
  console.log(response.data)
  return response.data
}

export default fetchCurrency
