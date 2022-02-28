import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
// import { Button } from 'bootstrap';
import Button from '../ButtonSmall';
import CashStatus from '../CashStatus';
import { FaAngleLeft } from "react-icons/fa";
import ProfileMenu from '../ProfilleMenu/ProfileMenu';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Header = () => {
  const router = useRouter();

  return (
    <header className={`${styles["Header"]}`}>
      <div className={`${styles["Header-Col"]}`}>
        <Link href="/dashboard/">
          <div className={`${styles["Header-Logotype"]}`}>
            <img src={'/images/common/logotype.svg'} alt="Logotype" />
          </div>
        </Link>
        { ( router.pathname === '/dashboard/shop/[id]' || router.pathname === '/dashboard/profile' ) && 
        <Link href="/dashboard/">
          <Button border={false} onClick={() => {}}><FaAngleLeft />&nbsp;Go back</Button>
        </Link>
        }
      </div>
      <div className={`${styles["Header-Col"]}`}>
        <CashStatus />
        <ProfileMenu />
      </div>
    </header>
  )
}

export default Header;