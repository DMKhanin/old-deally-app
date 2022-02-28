import React from 'react';

/*** Styles ***/
import styles from './Wallet.module.scss';

const Wallet = () => {
    return (
        <div className={`${styles['Wallet']}`}>
            <div>0.124241 btc</div>
            <div>$ 12.32 <span>+0.32</span></div>
        </div>
    )
}

export default Wallet;