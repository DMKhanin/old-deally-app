import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaTelegramPlane } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`${styles['Footer']}`}>
            <ul className={`${styles['Footer-Navigation']}`}>
                <li>
                    <Link href="/terms">
                        <a className={styles['Footer-Link']}>Terms of service</a>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy">
                        <a href="#" className={styles['Footer-Link']}>Privacy policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/refund-policy">
                        <a href="#" className={styles['Footer-Link']}>Refund policy</a>
                    </Link>
                </li>
            </ul>
            <ul className={`${styles['Footer-Social']}`}>
                <IconContext.Provider value={{ color: '#697088' }}>
                    <li>
                        <a href="#" className={styles['Footer-SocialLink']}><FaTelegramPlane /></a>
                    </li>
                    <li>
                        <a href="#" className={styles['Footer-SocialLink']}><FaTelegramPlane /></a>
                    </li>
                </IconContext.Provider>
            </ul>
            <div className={`${styles['Footer-Copy']}`}>
                © 2021 Deally Limited. All rights reserved. <br />
                DEALLY LIMITED Company number 13326559
            </div>
        </footer>
    )
}

export default Footer;