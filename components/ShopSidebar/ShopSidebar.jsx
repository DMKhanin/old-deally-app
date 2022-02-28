import React from 'react';

import styles from './ShopSidebar.module.scss';

const ShopSidebar = ({ isVisible = false, children, title, onClose }) => {
  return (
    <>
      <div className={`${styles["ShopSidebar-Container"]} ${styles[`ShopSidebar-Container_visible_${isVisible}`]}`} onClick={() => onClose()}>
      </div>
      <div className={`${styles["ShopSidebar"]} ${styles[`ShopSidebar_visible_${isVisible}`]}`}>
        <div className={styles["ShopSidebar-Header"]}>
          <h4 className={styles["ShopSidebar-Title"]}>{ title }</h4>
        </div>
        <div className={styles["ShopSidebar-Content"]}>
          { children }
        </div>
      </div>
    </>
  )
}

export default ShopSidebar;