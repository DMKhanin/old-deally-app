import { useRouter } from 'next/router'
import { Container, Col, Row } from 'react-bootstrap'
import { getProductById, getShopIdBySlug, sendProductEvent } from '../../../api/ClientAPI';

import { PayPalButton } from "react-paypal-button-v2";
import styles from '../../../styles/pages/BillingPage.module.scss';
import { useEffect } from 'react';

const Billing = ({ name, price, picture, description, categoriesList }) => {
  const router = useRouter()
  const { slug, productId } = router.query

  useEffect(() => {
    sendProductEvent(productId, { code: 'OPEN_PRODUCT' });
  }, [])

  return (
    <div className={styles['BillingPage']}>
      <Container>
        <Row>
          <Col>
            <picture className={`${styles['BillingPage-Picture']}`}>
              <img className={`${styles['BillingPage-Image']}`} src={`//api.deally.io/${picture}`} alt={name} />
            </picture>
          </Col>
          <Col>
            <div className={`${styles["BillingPage-Content"]}`}>
              <h1 className={`${styles['BillingPage-Title']}`}>{name}</h1>
              <div className={`${styles['BillingPage-Categories']}`}>
                {categoriesList.map(category =>
                  <span className={`${styles['BillingPage-Category']}`}>{category.name}</span>
                )}
              </div>
              <div className={`${styles['BillingPage-Description']}`}>
                {description}
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”
              </div>
              <div className={`${styles['BillingPage-Footer']}`}>
                <span className={`${styles['BillingPage-Price']}`}>$ {price}</span>
              </div>
              <PayPalButton
                amount={price}
                shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert("Transaction completed by " + details.payer.name.given_name);
                }}
                options={{
                  clientId: "AedXGruo7u2MbBd0eeJLYp1OQEZD7d3TVuXeEJmDalQelDolJ5UwkWksq77MJkQ5YpeiroUspPVqclLP",
                  merchantId: "T2LSYZRP4BZTL"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export async function getServerSideProps({ query, res }) {
  const id = query.productId;
  const shopSlug = query.slug;
  const shopIdResponse = await getShopIdBySlug({ slug: shopSlug });
  const { shopId } = shopIdResponse.data;
  const product = await getProductById({ shopId: shopId._id, id });

  return {
    props: {
      ...product
    }
  }
}

export default Billing;