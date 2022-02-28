import React from 'react';
import QuickActions from './components/QuickActions';

/*** Components ***/
import Link from 'next/link';

/*** Styles ***/
import styles from './ShopCard.module.scss';

const ShopCard = () => {
    return (
        <Link href="#">
            <a className={`${styles['ShopCard']}`}>
                <h3 className={`${styles['ShopCard-Title']}`}>Shop name</h3>
                <p className={`${styles['ShopCard-Products']}`}>243 Products</p>
                <span className={`${styles['ShopCard-Date']}`}>12.02.2021 12:01</span>
                <div className={`${styles['ShopCard-Actions']}`}>
                    <QuickActions />
                </div>
            </a>
        </Link>
    )
}

export default ShopCard;