import s from './Input.module.scss'

const Input = ({ value, changeNewQuantity, disabled }) => {
  const onChangeQuantity = (e) => {
    changeNewQuantity(e.target.value)
  }
  return (
    <input
      className={s.input}
      type="number"
      min="1"
      value={value}
      onChange={onChangeQuantity}
      disabled={disabled}
    />
  )
}

export default Input
