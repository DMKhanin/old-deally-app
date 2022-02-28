import React from 'react';
import styles from './P.module.scss';

const P = ({ children, size }) => {
    return (
        <p className={`${styles['P']} ${styles['P_size_' + size]}`}>
            { children }
        </p>
    )
}

export default P;