import React from 'react';

import styles from './ProfileWallet.module.scss';

const ProfileWallet = () => {
    const btc = '0.124241';
    const dollor = '12.32';
    const today = '+0.32'

    return (
        <div className={`${styles['ProfileWallet']}`}>
            <div className={`${styles['ProfileWallet-Money']}`}>{btc} btc.</div>
            <div className={`${styles['ProfileWallet-Money']}`}>$ {dollor} <span>{today}</span></div>
        </div>
    )
}

export default ProfileWallet;