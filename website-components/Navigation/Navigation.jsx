import styles from '../../styles/Index.module.scss';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import NFTAlert from '../../components/NFTAlert';

const AccentLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span className={styles.AccentLink}>
        {children}
      </span>
    </Link>
  )
}

const Navigation = ({ currentLocation }) => {

  const _onClick = (e, ancor) => {
    const DOMElement = document.getElementById(ancor);
    if (DOMElement) {
      e.preventDefault();
      const {top} = DOMElement.getBoundingClientRect();
      // setCurrentLocation(ancor);
      window.scroll({
        top: top - 120 + document.documentElement.scrollTop,
        behavior: "smooth"
      });
    }
  }

  useEffect(() => {
    const urlArray = document.location.href.split('#')
    if (urlArray.length > 1) {
      const DOMElement = document.getElementById(urlArray[1])
      if (DOMElement) {
        setTimeout(() => {
          // setCurrentLocation(ancor);
          const {top} = DOMElement.getBoundingClientRect();
          window.scroll(0, top - 120 + document.documentElement.scrollTop);
          window.history.replaceState({}, document.title, "/");
        }, 1)
      }
    }
  }, [])

  return (
    <div className={styles.Navigation}>
      <NFTAlert />
      <div className="Wrapper">
        <div className={styles.Navigation__row}>
          <div className={styles.Navigation__col}>
            <Link href="/">
            <div className={styles.Navigation__logo}>
              <svg width="70" height="25" viewBox="0 0 70 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20.8119V0H5.79822C7.80905 0 9.37086 0.231244 10.4836 0.693731C11.616 1.13909 12.4164 1.84995 12.8849 2.82631C13.3535 3.78554 13.5877 5.01884 13.5877 6.52621V14.1059C13.5877 15.6475 13.3535 16.915 12.8849 17.9085C12.4164 18.902 11.6257 19.6386 10.5129 20.1182C9.41966 20.5807 7.88714 20.8119 5.91535 20.8119H0ZM4.83185 17.8571H5.85678C6.75482 17.8571 7.38931 17.7372 7.76024 17.4974C8.15069 17.2405 8.39472 16.8722 8.49234 16.3926C8.58995 15.8959 8.63876 15.2878 8.63876 14.5683V5.98664C8.63876 5.26722 8.57043 4.69339 8.43377 4.26516C8.31663 3.8198 8.06284 3.49435 7.67239 3.2888C7.30146 3.08325 6.6865 2.98047 5.8275 2.98047H4.83185V17.8571Z" fill="#7461E8" />
                <path d="M21.8529 21.0689C20.6034 21.0689 19.559 20.8719 18.7195 20.4779C17.88 20.0668 17.2456 19.4758 16.8161 18.705C16.3866 17.9171 16.1718 16.975 16.1718 15.8787V10.8941C16.1718 9.76362 16.3866 8.82152 16.8161 8.06783C17.2456 7.29702 17.8898 6.71463 18.7488 6.32066C19.6078 5.90956 20.6425 5.70401 21.8529 5.70401C23.1414 5.70401 24.1858 5.90956 24.9863 6.32066C25.7867 6.73176 26.3724 7.33128 26.7433 8.11922C27.1338 8.90716 27.329 9.86639 27.329 10.9969V13.592H20.5351V16.4697C20.5351 16.8979 20.5839 17.2491 20.6815 17.5231C20.7987 17.7972 20.9549 17.9942 21.1501 18.1141C21.3453 18.2169 21.5893 18.2682 21.8822 18.2682C22.1555 18.2682 22.3898 18.2169 22.585 18.1141C22.7997 17.9942 22.9559 17.8143 23.0535 17.5745C23.1511 17.3347 23.2 17.0178 23.2 16.6238V15.2107H27.2997V16.444C27.2997 17.9514 26.8312 19.099 25.8941 19.8869C24.957 20.6749 23.6099 21.0689 21.8529 21.0689ZM20.5351 11.742H23.2V10.2775C23.2 9.84926 23.1511 9.50668 23.0535 9.24974C22.9559 8.97568 22.7997 8.78726 22.585 8.68448C22.3898 8.56458 22.136 8.50463 21.8236 8.50463C21.5308 8.50463 21.2867 8.56458 21.0915 8.68448C20.9158 8.80439 20.7792 9.0185 20.6815 9.32683C20.5839 9.61802 20.5351 10.0377 20.5351 10.5858V11.742Z" fill="#7461E8" />
                <path d="M33.3603 21.0689C32.5599 21.0689 31.8669 20.889 31.2812 20.5293C30.715 20.1696 30.2855 19.7157 29.9927 19.1675C29.6998 18.6194 29.5534 18.0541 29.5534 17.4717C29.5534 16.5468 29.7584 15.7674 30.1684 15.1336C30.5784 14.4998 31.1152 13.9688 31.779 13.5406C32.4428 13.1124 33.1846 12.7441 34.0046 12.4358C34.8245 12.1274 35.6445 11.8448 36.4644 11.5879V10.2004C36.4644 9.87496 36.4351 9.59233 36.3766 9.35252C36.318 9.11271 36.2009 8.93285 36.0252 8.81295C35.869 8.67592 35.6347 8.6074 35.3224 8.6074C35.01 8.6074 34.766 8.66735 34.5903 8.78726C34.4341 8.89003 34.3169 9.05276 34.2388 9.27544C34.1803 9.48099 34.1412 9.71223 34.1217 9.96917L34.0339 10.9969L29.8463 10.8428C29.9439 9.09558 30.4612 7.80233 31.3983 6.963C32.3549 6.12367 33.7898 5.70401 35.703 5.70401C37.421 5.70401 38.69 6.12367 39.51 6.963C40.3299 7.7852 40.7399 8.8729 40.7399 10.2261V17.1377C40.7399 17.7201 40.7496 18.2425 40.7692 18.705C40.8082 19.1504 40.8473 19.5529 40.8863 19.9126C40.9449 20.2552 40.9937 20.555 41.0327 20.8119H37.0501C36.9915 20.4351 36.9232 20.024 36.8451 19.5786C36.767 19.1333 36.7085 18.8335 36.6694 18.6793C36.4742 19.296 36.1033 19.8527 35.5566 20.3494C35.01 20.8291 34.2779 21.0689 33.3603 21.0689ZM34.971 18.3196C35.1857 18.3196 35.3907 18.2768 35.5859 18.1912C35.7811 18.1055 35.9471 17.9942 36.0837 17.8571C36.2399 17.7201 36.3668 17.5916 36.4644 17.4717V13.3864C36.0545 13.6091 35.6738 13.8318 35.3224 14.0545C34.9709 14.26 34.6683 14.4913 34.4146 14.7482C34.1608 15.0051 33.9655 15.2878 33.8289 15.5961C33.6922 15.9044 33.6239 16.2556 33.6239 16.6495C33.6239 17.1634 33.741 17.5745 33.9753 17.8828C34.2096 18.174 34.5415 18.3196 34.971 18.3196Z" fill="#7461E8" />
                <path d="M43.8101 24.8801V3.63995L48.232 0V21.2402L43.8101 24.8801Z" fill="#7461E8" />
                <path d="M51.5315 24.8801V3.63995L55.9533 0V21.2402L51.5315 24.8801Z" fill="#7461E8" />
                <path d="M59.3407 25V22.2765C59.9849 22.2765 60.512 22.2422 60.922 22.1737C61.332 22.1052 61.6346 21.9767 61.8298 21.7883C62.0445 21.617 62.1519 21.3686 62.1519 21.0432C62.1519 20.7862 62.0836 20.4351 61.9469 19.9897C61.8298 19.5444 61.6931 19.0476 61.537 18.4995L57.6715 5.96095H61.8591L64.0261 15.0822L65.7831 5.96095H70L66.076 21.2744C65.8417 22.2336 65.4512 22.9788 64.9046 23.5098C64.3775 24.0579 63.7235 24.4433 62.9426 24.666C62.1812 24.8887 61.2929 25 60.2777 25H59.3407Z" fill="#7461E8" />
              </svg>
            </div>
            </Link>
          </div>
          <div className={styles.Navigation__col}>
            <nav className={styles.Navigation__menu}>
              <a href="/#features" onClick={(e) => _onClick(e, 'features')} className={`${styles["Navigation__link"]} ${currentLocation === 'features' && styles["Navigation__link--active"]}`}>Features</a>
              <a href="/#about"  onClick={(e) => _onClick(e, 'about')}  className={`${styles["Navigation__link"]} ${currentLocation === 'about' && styles["Navigation__link--active"]}`}>About us</a>
              <a href="/#pricing"  onClick={(e) => _onClick(e, 'pricing')}  className={`${styles["Navigation__link"]} ${currentLocation === 'pricing' && styles["Navigation__link--active"]}`}>Pricing</a>
              <a href="/#feedback" onClick={(e) => _onClick(e, 'feedback')}  className={`${styles["Navigation__link"]} ${currentLocation === 'feedback' && styles["Navigation__link--active"]}`}>Feedback</a>
            </nav>
          </div>
          <div className={styles.Navigation__col}>
            <div className={styles.Navigation__right}>
              <Link href="/signin">
                <a className={styles.Navigation__login}>Sing in</a>
              </Link>
              <AccentLink href="/signup">
                <a>
                  Sign up
                </a>
              </AccentLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;