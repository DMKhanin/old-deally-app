import React from 'react';
import { FaPen, FaTrash } from "react-icons/fa";

import styles from './ProductCard.module.scss';

const ProductCard = ({ name, price, _id,  picture, onClick, onDeleteItem, categoriesList = [] }) => {
  return (
    <div 
      className={`${styles["ProductCard"]}`}>
      <div className={`${styles["ProductCard-Actions"]} d-flex`}>
        {/* <div className={`${styles["ProductCard-Button"]}`}><FaPen /></div> */}
        <div
          onClick={() => onDeleteItem(_id)}
          className={`${styles["ProductCard-Button"]} ${styles["ProductCard-Button--Danger"]}`}><FaTrash /></div>
      </div>
      <div 
        onClick={() => onClick()} >
      <div className="d-flex">
        <span className={`${styles["ProductCard-Amount"]}`}>In stock</span>
        <span className={`${styles["ProductCard-Published"]} ${styles["ProductCard-Published--Error"]}`}>Hidden</span>
      </div>
      <div className={`${styles["ProductCard-Picture"]}`}>
        <picture>
          <img src={`http://localhost:8080/${picture}`} loading="lazy" alt={name}/>
        </picture>
      </div>
      <div className={`${styles["ProductCard-Content"]}`}>
        <div className="d-flex flex-wrap">
          { categoriesList.map(category => 
            <span className={`${styles["ProductCard-Category"]}`}>{category.name}</span>
          )}  
        </div>
        <h3 className={`${styles["ProductCard-Name"]}`}>{ name }</h3>
        <p className={`${styles["ProductCard-Price"]}`}>{ price }</p>
      </div>
      </div>
    </div>
  )
};

export default ProductCard;