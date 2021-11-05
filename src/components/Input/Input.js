import PropTypes from 'prop-types'
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
      // pattern="[0-9]+"
      value={value}
      onChange={onChangeQuantity}
      disabled={disabled}
    />
  )
}

Input.defaulProps = {
  changeNewQuantity: () => null,
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeNewQuantity: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
}

export default Input
