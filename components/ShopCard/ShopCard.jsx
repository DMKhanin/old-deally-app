import React from 'react';
import convertIsoDateToString from '../../helpers/convertIsoDateToString';
import { FaTrash } from "react-icons/fa";
import styles from './ShopCard.module.scss';

const ShopCard = ({_id, name, createdAt, onDelete, onClick }) => {
  return (
    <div className={`${styles["ShopCard"]}`}>
      <div className={`${styles["ShopCard-Actions"]}`}>
        <div onClick={() => onDelete(_id)} className={`${styles["ShopCard-Button"]} ${styles['ShopCard-Button--Danger']}`}>
          <FaTrash />
        </div>
      </div>
      <div onClick={() => onClick(_id) } className={`${styles["ShopCard-Content"]}`}>
        <h2 className={`${styles["ShopCard-Title"]}`}>{ name }</h2>
        <span className={`${styles["ShopCard-Date"]}`}>{ convertIsoDateToString(createdAt) }</span>
      </div>
    </div>
  )
}

export default ShopCard;