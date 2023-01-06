import { forwardRef } from 'react'

const FormBase = (props, ref) => {
  const { label, name, id, required, type, onChange } = props

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={ref}
        name={name}
        required={required}
        type={type}
        onChange={onChange} />
    </div>
  )
}

export default forwardRef(FormBase)