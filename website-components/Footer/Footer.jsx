import Link from 'next/link';
import styles from '../../styles/Index.module.scss';
import { FaTwitter, FaTelegramPlane, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="Wrapper">
        <div className={styles.Footer__row}>
          <div className={styles.Footer__logo}>
            <img src="/images/website/footer-logotype.svg" />
          </div>
          <div className={styles.Footer__mav}>
            <Link href="/terms">
              <span className={styles.Footer__link}>Terms of service</span>
            </Link>
            <Link href="/privacy-policy/">
              <span className={styles.Footer__link}>Privacy policy</span>
            </Link>
            <Link href="/refund-policy/">
              <span className={styles.Footer__link}>Refund policy</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className={styles.Footer__info}>
          <span>Copyright © { new Date().getFullYear() } Deally Limited. All rights reserved.</span>
          <span>
            {/* <Link href="//facebook.com">
              <a className={styles['Footer__social-link']} target="_blank">
                <FaFacebook />
              </a>
            </Link> */}
            <Link href="https://twitter.com/Deally91480384">
              <a className={styles['Footer__social-link']} target="_blank">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://t.me/new_deally">
              <a className={styles['Footer__social-link']} target="_blank">
                <FaTelegramPlane />
              </a>
            </Link>
          </span>
          <span>DEALLY LIMITED Company number 13326559</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;