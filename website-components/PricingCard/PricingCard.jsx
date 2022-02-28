import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import styles from './PricingCard.module.scss';

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className={`${styles["PricingCard"]}`}>
      <h2 className={`${styles["PricingCard-Title"]}`}>{ title }</h2>
      <p className={`${styles["PricingCard-Description"]}`}>{ description }</p>
      <div className={`${styles["PricingCard-PriceContainer"]}`}>
        { price.mounth ? <p className={`${styles["PricingCard-Price"]}`}><span>${ price.mounth }</span>/mo</p> : null }
        { price.year ? <p className={`${styles["PricingCard-Price"]}`}>or <span>${ price.year }</span>/year</p> : null }
      </div>
      <div className={`${styles["PricingCard-Content"]}`}>
        <ul className={`${styles["PricingCard-FeaturesList"]}`}>
          { features.map(feature =>
            <>
              { !feature.soon && <li className={`${styles["PricingCard-FeaturesItem"]}`}><span className={`${styles["PricingCard-FeaturesItemIcon"]}`}><FaCheck /></span>{feature.title}</li> }
              { feature.soon &&  <li className={`${styles["PricingCard-FeaturesItem"]} ${styles["PricingCard-FeaturesItem--soon"]}`}><span className={`${styles["PricingCard-FeaturesItemIcon"]}`}><FaCheck /></span>{feature.title}<span className={`${styles["PricingCard-FeaturesItemSoon"]}`}>Soon</span></li> }
            </>
          )}
        </ul>
      </div>
      <div className={`${styles["PricingCard-Footer"]}`}>
        <Link href="/dashboard">
          <a className={`${styles["PricingCard-Button"]}`}>Start now</a>
        </Link>
      </div>
    </div>
  )
};

export default PricingCard;
















