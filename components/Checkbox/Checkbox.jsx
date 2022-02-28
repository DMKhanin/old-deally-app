import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ name, id, labelText }) => {
  return (
    <div className={`${styles["Checkbox"]}`}>
      <input className={`${styles["Checkbox-Input"]}`} type="checkbox" name={name} id={id} />
      <div className={`${styles["Checkbox-Container"]}`} >
        <div className={`${styles["Checkbox-Rect"]}`} ></div>
        <label className={`${styles["Checkbox-Label"]}`}  htmlFor={id}>{labelText}</label>
      </div>
    </div>
  )
}

export default Checkbox;