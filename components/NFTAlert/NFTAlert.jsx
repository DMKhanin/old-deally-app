import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

import styles from './NFTAlert.module.scss';

const NFTAlert = () => {
  const [visible, setVisible] = useState(true);
  let scrollEndPositionY = 0;
  
  const onScroll = (e) => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll <= scrollEndPositionY) { 
      setVisible(true);
    } else {
      setVisible(false);
    }

    scrollEndPositionY = currentScroll <= 0 ? 0 : currentScroll;
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    // document.addEventListener('touchmove', onScroll);
    return () => { 
      document.removeEventListener('scroll', onScroll);
      // document.removeEventListener('touchmove', onScroll);
    }
  }, [])

  return (
    <Link href="/nft">
      <div className={`${styles['NFTAlert']} ${styles['NFTAlert_visible_' + visible]}`}>
          <div className={`${styles['NFTAlert-Container']}`}>
          <div className={`${styles['NFTAlert-Content']}`}>
            <img className={`${styles['NFTAlert-Logotype']}`} src={'images/website/nft-logotype.svg'} alt="" />
            <span className={`${styles['NFTAlert-Description']}`}>Meet Deally NFT - the revolutionary world-class NFT marketplace</span>
          </div>
          <span className={`${styles['NFTAlert-Action']}`}>Learn more
            <span><FaArrowRight /></span>
          </span>
          </div>
      </div>
    </Link>
  )
};

export default NFTAlert;