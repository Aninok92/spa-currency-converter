const filterNeedCurrency = (data, query) => {
  console.log(data)
  console.log(query)
  const asArray = Object.entries(data)

  const filtered = asArray.filter(
    ([key, value]) => key === 'RUB' || key === 'USD' || key === 'EUR'
  )

  return Object.fromEntries(filtered)
}

export default filterNeedCurrency
