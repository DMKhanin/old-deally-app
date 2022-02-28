import React from 'react';
import { deleteCategory } from '../../api/DashboardAPI';
import styles from './CategoryCard.module.scss';
import { FaTrash } from "react-icons/fa";

const CategoryCard = ({ _id, name, onClick, onDeleteItem }) => {
  return (
    <div 
      className={`${styles["CategoryCard"]}`}>
      <div className={`${styles["CategoryCard-Actions"]}`}>
        <div 
          onClick={() => onDeleteItem(_id)}
          className={`${styles["CategoryCard-Button"]} ${styles["CategoryCard-Button--Danger"]}`}>
            <FaTrash />
          </div>
      </div>
      <div 
        onClick={() => onClick()}
        className={`${styles["CategoryCard-Content"]}`}>
          { name }
      </div>
    </div>
  )
};

export default CategoryCard;
