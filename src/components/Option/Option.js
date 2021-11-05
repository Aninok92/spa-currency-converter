const Option = ({ currencyOptions }) => {
  return [...Object.keys(currencyOptions)].map((opt) => (
    <option key={opt} value={opt}>
      {opt}
    </option>
  ))
}

export default Option
