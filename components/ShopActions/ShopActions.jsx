import Reacct from 'react';
import { FaChartPie, FaCog } from 'react-icons/fa';

import styles from './ShopActions.module.scss';

const ShopActions = ({ onSelectItem }) => {
  return (
    <div className={styles["ShopActions"]}>
      <button className={styles["ShopActions-Button"]} onClick={() => onSelectItem('ANALYTICS')} dataTooltip="Analytics">
        <FaChartPie />
      </button>
      <button className={styles["ShopActions-Button"]} onClick={() => onSelectItem('SETTINGS')} dataTooltip="Settings">
        <FaCog />
      </button>
    </div>
  )
}

export default ShopActions;