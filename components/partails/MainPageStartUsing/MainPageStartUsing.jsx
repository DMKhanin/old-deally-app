import React from 'react';

import styles from './MainPageStartUsing.module.scss';

const MainPageStartUsing = ({ children }) => {
    return (
        <div className={`${styles['MainPageStartUsing']}`}>
            <div className={styles['MainPageStartUsing-Container']}>
                { children }
            </div>
        </div>
    )
};

export default MainPageStartUsing;