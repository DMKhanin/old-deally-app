import React, { useEffect, useState } from 'react';
import { FaCross } from 'react-icons/fa';

import styles from './CookieDanger.module.scss';

const CookieDanger = () => {
  const [cookieAccepted, cookieAccept] = useState(false);

  useEffect(() => {
    const beforeUserState = localStorage.getItem('cookieAccepted') || false;
    cookieAccept(beforeUserState)
  }, [])
  

  const _acceptCookie = () => {
    cookieAccept(true);
    localStorage.setItem('cookieAccepted', true);
  }

  return (
    <>
    { !cookieAccepted && 
    <div className={styles["CookieDanger"]}>
      <div className="Wrapper">
        <div className={styles["CookieDanger-Content"]}>
          <div className={styles["CookieDanger-Title"]}>
            This site uses cookies
          </div>
          <div className={styles["CookieDanger-Description"]}>
            We use cookies to improve your experience on our site and to show you relevant advertising.
          </div>
          <button className={styles["CookieDanger-Accept"]} onClick={() => _acceptCookie()}>Accept</button>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default CookieDanger;