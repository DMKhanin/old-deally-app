import React, { useState } from 'react';
import { cn } from '@bem-react/classname'

import styles from './Button.module.scss';

const Button = ({ children, onClick, type, style, state, role }) => {
  const _onClick = (e) => {
    if (typeof onClick !== 'undefined') onClick(e)
  }

  return (
    <button
      className={`${styles['Button']} ${styles[`Button_style_${style}`]} ${styles[`Button_state_${state}`]}`}
      type={type}
      role={role ? role : ''}
      onClick={(e) => _onClick(e)}
    >
      { children }
    </button>
  )
};

export default Button;