import { useRouter } from 'next/router'
import FourOhFour from 'next/error'
import AppError from '../../../errors/AppError.js';
import Error from '../../_error';
import RedTemplateMain from '../../../templates/RedTemplate/pages/Main.jsx';
import BlueTemplateMain from '../../../templates/BlueTemplate/pages/Main.jsx';
import { ToastHeader } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../../styles/pages/ShopPage.module.scss';
import Link from 'next/link';
import { getShopById, getShopIdBySlug, getCategoriesByShopId, getProductsByShopId, sendShopEvent } from '../../../api/ClientAPI.js';
import { useEffect } from 'react';

const Shop = ({ products, shop, categories }) => {

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    sendShopEvent(shop._id, { code: 'OPEN_SHOP' });
  }, [])

  return (
    <>
      {/* cover */}
      <header className={styles["Header"]}>
        <Container>
          {shop.logotype &&
            <picture className={styles["Header-Logotype"]}>
              <img src={`//api.deally.io/${shop.logotype}`} alt="Logotype" />
            </picture>
          }
          <h1 className={styles["Header-Title"]}>{shop.name}</h1>
          <p className={styles["Header-Description"]}>{shop.description}</p>
        </Container>
      </header>
      <Container>
        <main>
          {/* categories */}
          <h2 className={styles['Categories-Title']}>Categories</h2>
          <div className={styles['Categories']}>
            {categories.map(category =>
              <span className={styles['Categories-Link']}>{category.name}</span>
            )}
          </div>
          {/* catelog */}
          <div>
            <Row className={`h-100`}>
              <Col sm="12">
                <h2 className={styles['Products-Title']}>Products</h2>
              </Col>
              {products.map(product =>
                <>
                  <Col sm="3">
                    <Link href={`/shop/${slug}/${product._id}`}>
                      <article className={`${styles['ProductCard']}`}>
                        <picture className={`${styles['ProductCard-Picture']}`}>
                          <img src={`//api.deally.io/${product.picture}`} alt={product.name} />
                        </picture>
                        <div className={`${styles['ProductCard-Content']}`}>
                          <h2 className={`${styles['ProductCard-Title']}`}>{product.name}</h2>
                          <div className={`${styles['ProductCard-Categories']}`}>
                            {product.categoriesList.map(category =>
                              <span className={`${styles['ProductCard-Category']}`}>
                                {category.name}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className={`${styles['ProductCard-Footer']}`}>
                          <span className={`${styles['ProductCard-Price']}`}>$ {product.price}</span>
                          <span className={`${styles['ProductCard-Button']}`}>Buy</span>
                        </div>
                      </article>
                    </Link>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </main>
        {/* footer */}
        <footer className={styles["Footer"]}>
          <span>powered by <a href="//deally.io">Deally.io</a></span>
        </footer>
      </Container>
    </>
  )
}

export async function getServerSideProps({ query, res }) {
  const slug = query.slug;
  const shopIdResponse = await getShopIdBySlug({ slug });
  const { shopId } = shopIdResponse.data;
  const shop = await getShopById({ id: shopId._id })
  const products = await getProductsByShopId({ id: shopId._id });
  const categories = await getCategoriesByShopId({ id: shopId._id });


  return {
    props: {
      shop: shop.data.shop,
      products,
      categories,
      shopId
    }
  }
}

export default Shop