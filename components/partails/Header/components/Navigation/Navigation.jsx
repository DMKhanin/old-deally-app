import React from 'react';
/*** Components ***/
import Link from 'next/link';

/*** Styles ***/
import styles from './Navigation.module.scss';

const Navigation = ({ links }) => {
    return (
        <nav className={`${styles['Navigation']} d-lg-block d-none`}>
            <ul className={styles['Navigation-List']}>
                { links.map((link, key) => 
                <li key={key} className={styles['Navigation-ListItem']}>
                    <Link href={link.href}>
                        <a className={styles['Navigation-Link']}>
                            {link.text}
                        </a>
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;