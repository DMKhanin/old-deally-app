import React, { useEffect, useState } from 'react';
import ButtonSmall from '../../../ButtonSmall';

import styles from './MoneyStatus.module.scss';

const MoneyStatus = () => {

  const [btcCash, setBtcCash] = useState(false);

  const getBtcStatus = async (usd) => {
    const response = await fetch(`https://blockchain.info/tobtc?currency=USD&value=${usd}`)
    const btc = await response.text();
    setBtcCash(btc);

  }

  useEffect(() => {
    setTimeout(() => {
      getBtcStatus(200);
    }, 2500)
  }, [])

  return (
    <div className={`${styles['MoneyStatus']}`}>
      <div className={`${styles['MoneyStatus__column']} ${styles['MoneyStatus__column--space']}`}>
        <div className={`${styles['MoneyStatus__cash']}`}>Btc&nbsp;
          { btcCash !== false ? btcCash : (
            <span className={`${styles['MoneyStatus__loading']}`}></span>
          )}
        </div>
        <div className={`${styles['MoneyStatus__label']}`}>in your account</div>
      </div>
      <div className={`${styles['MoneyStatus__column']}`}>
        <ButtonSmall onClick={(e) => e.preventDefault()}>Request of cash</ButtonSmall>
      </div>
    </div>
  )
};

export default MoneyStatus;