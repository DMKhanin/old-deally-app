import React from 'react';

import styles from './EmptyCardVertical.module.scss';

const EmptyCardVertical = ({ children, imgSrc, buttonText, onClickButton }) => {
  return (
    <div className={styles["EmptyCardVertical"]}>
      <picture className={styles["EmptyCardVertical-Picture"]}>
        <img className={styles["EmptyCardVertical-Image"]} src={imgSrc}/>
      </picture>
      <div className={styles["EmptyCardVertical-Description"]}>
        { children }
      </div>
      <div className={styles["EmptyCardVertical-Footer"]}>
        <button className={styles["EmptyCardVertical-Button"]} onClick={() => onClickButton()}>{ buttonText }</button>
      </div>
    </div>
  )
}

export default EmptyCardVertical;