import React from 'react';

import styles from './Input.module.scss';

const Input = ({type, state, value, onChange, placeholder, readonly = false, errorMessageComponent, defaultValue, name, label, status, register = () => {}, validators}) => {

  const _onChange = (e) => {
    if (typeof onChange !== 'undefined') {
      onChange(e)
    }
  }

  return (
    <div className={`${styles['Input']} ${styles[`Input--status--${status}`]} ${styles[`Input__state-${state}`]}`}>
      <div className={`${styles['Input-Container']}`}>
        <input 
          className={`${styles['Input__field']}`}
          type={type} 
          name={name} 
          id={name} 
          // value={value} 
          defaultValue={defaultValue}
          placeholder={label}
          readOnly={readonly}
          onChange={(e) => _onChange(e)}
          {...register(name, {...validators})}
        />
        <label 
          className={`${styles['Input__label']}`}
          htmlFor={name}>{label}</label>
      </div>
      <div className={`${styles['Input-Error']}`}>
        { errorMessageComponent }
      </div>
    </div>
  )
}

export default Input;