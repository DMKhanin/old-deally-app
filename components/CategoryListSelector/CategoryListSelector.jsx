import React, { useEffect, useState } from 'react';
import styles from './CategoryListSelector.module.scss';

const CategoryListSelector = ({ items, selectedCategories = [], onChange }) => {
  const [currentSelection, setCurrentSelection] = useState(selectedCategories);

  const _onToggleSelectedItem = (id) => {
    const newSelection = [...currentSelection];
    const selectedCategoryNDX = newSelection.findIndex((item) => item === id)

    if (selectedCategoryNDX > -1) {
      newSelection.splice(selectedCategoryNDX, 1);
    } else {
      newSelection.push(id);
    }

    setCurrentSelection(newSelection);
  }

  const _hasSelectedItem = (id) => {
    return currentSelection.findIndex(item => item === id) > -1;
  }

  useEffect(() => {
    onChange(currentSelection)
  }, [currentSelection])

  useEffect(() => {
    setCurrentSelection(selectedCategories);
  }, [selectedCategories])

  return (
    <div className={`${styles["CategoryListSelector"]}`}>
      { items.map(item => 
        <button 
          onClick={(e) => { e.preventDefault(); _onToggleSelectedItem(item._id)}}
          className={`${styles["CategoryListSelector-Item"]} ${_hasSelectedItem(item._id) ? styles["CategoryListSelector-Item--selected"] : null}`}>
          { item.name }
        </button>
      )}
    </div>
  )
}

export default CategoryListSelector;