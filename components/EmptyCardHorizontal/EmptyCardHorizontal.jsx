import React from 'react';
import styles from './EmptyCardHorizontal.module.scss';

const EmptyCardHorizontal = ({ children, imgSrc, buttonText, onClickButton }) => {
  return (
    <div className={styles["EmptyCardHorizontal"]}>
      <picture className={styles["EmptyCardHorizontal-Picture"]}>
        <img className={styles["EmptyCardHorizontal-Image"]} src={imgSrc}/>
      </picture>
      <div className={styles["EmptyCardHorizontal-Content"]}>
        <div className={styles["EmptyCardHorizontal-Description"]}>
          { children }
        </div>
        <div className={styles["EmptyCardHorizontal-Footer"]}>
          <button className={styles["EmptyCardHorizontal-Button"]} onClick={() => onClickButton()}>{ buttonText }</button>
        </div>
      </div>
    </div>
  )
};

export default EmptyCardHorizontal;