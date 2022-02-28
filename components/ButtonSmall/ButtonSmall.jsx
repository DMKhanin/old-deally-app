import React from 'react';

import styles from './ButtonSmall.module.scss';

const ButtonSmall = ({ children, onClick, border = true, style = false }) => {
  return (
    <button className={`${styles['ButtonSmall']} ${!border ? styles['ButtonSmall_border_none'] : null} ${styles[`ButtonSmall_style_${style}`]}`} onClick={(e) => { onClick(e)}}>
      { children }
    </button>
  )
}

export default ButtonSmall;