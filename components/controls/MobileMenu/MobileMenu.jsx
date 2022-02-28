import React from 'react';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
    return (
        <div className={`${styles['MobileMenu']} d-sm-none d-xs-block`}>
            <ul className={styles['MobileMenu-List']}>
                <li className={styles['MobileMenu-ListItem']}>
                    <a className={styles['MobileMenu-Button']}>
                        a
                    </a>
                </li>
                <li className={styles['MobileMenu-ListItem']}>
                    <a className={styles['MobileMenu-Button']}>
                        b
                    </a>
                </li>
                <li className={styles['MobileMenu-ListItem']}>
                    <a className={styles['MobileMenu-Button']}>
                        c
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu;