import React from 'react';
import ButtonSmall from '../ButtonSmall';

import styles from './CashStatus.module.scss';

const CashStatus =() => {
  return (
    <div className={`${styles["CashStatus"]}`}>
      <span className={`${styles["CashStatus-Money"]}`}>
        $ 2.32
      </span>
      <span className={`${styles["CashStatus-Money"]}`}>
        Btc. 0.912412
      </span>
      <ButtonSmall border={false}>Request a cash</ButtonSmall>
    </div>
  )
};

export default CashStatus;