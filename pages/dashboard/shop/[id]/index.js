// import { Cookies } from 'react-cookie';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";


import Head from 'next/head';
import {
  getCategoriesByShopId,
  getProductsByShopId,
  getShopById,
  createCategory,
  createProduct,
  deleteCategory,
  deleteProduct,
  // uploadShopLogotype,
  uploadFile,
  getShopAnallytics
} from "../../../../api/DashboardAPI";
import MoneyStatus from "../../../../components/Admin/Header/MoneyStatus";
import Navigation from "../../../../components/Admin/Header/Navigation/Navigation";
import ButtonSmall from "../../../../components/ButtonSmall";
import CategoryCard from "../../../../components/CategoryCard";
import Input from "../../../../components/Input";
import ProductCard from "../../../../components/ProductCard";
import Dropzone from 'react-dropzone'
import EditingSection from './../../../../components/EditingSection';


import Loader from "../../../../components/Loader";
import handleAuthSSR from '../../../../helpers/handleAuthSSR';
import CategoryCreate from './../../../../components/CategoryCreate';
import ProductCreate from "../../../../components/ProductCreate";
import ProductEdit from "../../../../components/ProductEdit";
import CategoryEdit from "../../../../components/CategorнEdit/CategoryEdit";
import Header from "../../../../components/Header";
import ShopActions from "../../../../components/ShopActions";
import ShopSidebar from "../../../../components/ShopSidebar";
import { wrapper } from "../../../../store";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Opening shop',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};


const data2 = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Buy',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [analyticData, setAnalyticData] = useState(null);

  const [activeSidebar, setActiveSidebar] = useState('');
  const [shopData, setShopData] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [productsData, setProductsData] = useState(null);
  const [productsLoaded, setProductsLoaded] = useState(false);

  const [categoryCreateOpen, setCategoryCreateOpen] = useState(false);
  const [productCreateOpen, setProductCreateOpen] = useState(false);

  const [editingProductId, setEditingProductId] = useState(null);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const _onCategoryCreated = async () => {
    setCategoriesData(null);
    setCategoryCreateOpen(false);
    const categoriesDataResponse = await getCategoriesByShopId({ shopId: id });
    setCategoriesData(categoriesDataResponse);
  }

  const _onDeleteCategory = async (categoryId) => {
    setCategoriesLoaded(false);
    await deleteCategory({ shopId: id, categoryId });
    setCategoriesData(null);
    const categoriesDataResponse = await getCategoriesByShopId({ shopId: id })
    setCategoriesData(categoriesDataResponse);
    setCategoriesLoaded(true);
  }

  const _onProductCreated = async () => {
    setProductsData(null);
    setProductCreateOpen(false);
    const productsDataResponse = await getProductsByShopId({ shopId: id });
    setProductsData(productsDataResponse);
  }

  const _onDeleteProduct = async (productId) => {
    setProductsLoaded(false);
    await deleteProduct({ shopId: id, productId });
    setProductsData(null);
    const productsDataResponse = await getProductsByShopId({ shopId: id });
    setProductsData(productsDataResponse);
    setProductsLoaded(true);
  }

  const _onUploadLogotype = async (files) => {
    let formData = new FormData();
    formData.append('logotype', files[0]);
    // await uploadShopLogotype({ id, formData })
    const shopDataResponse = await getShopById(id);
    setShopData(null);
    setShopData(shopDataResponse);
  }

  useEffect(() => {
    const fetchData = async () => {
      setCategoriesLoaded(false);
      setProductsLoaded(false);
      const shopDataResponse = await getShopById(id);
      const productsDataResponse = await getProductsByShopId({ shopId: id });
      const categoriesDataResponse = await getCategoriesByShopId({ shopId: id });
      const analyticDataResponse = await getShopAnallytics({ shopId: id, requestData: { code: 'OPEN_SHOP' } });

      let analitycTMPData = {
        labels: analyticDataResponse.labels,
        datasets: [
          {
            label: 'Opening shop',
            data: analyticDataResponse.data,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ]
      };

      setAnalyticData(analitycTMPData)
      setShopData(shopDataResponse.data.shop);
      setCategoriesData(categoriesDataResponse);
      setProductsData(productsDataResponse);
      setCategoriesLoaded(true);
      setProductsLoaded(true);
    }

    fetchData();
  }, [])

  return (
    <>
      <Head>
        <title>Deally | Edit shop {shopData?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      { shopData !== null ? (
        <Container className="pt-5 mt-5 pb-5">
          <ShopActions onSelectItem={(itemKey) => setActiveSidebar(itemKey)} />
          {/* ANALYTICS */}
          <ShopSidebar title="Settings" onClose={() => setActiveSidebar('')} isVisible={activeSidebar === 'SETTINGS'}>
            <Row>
              <Col sm={12}>
                <Input status="default" label="Slug" readonly={true} value={`deally.io/shop/${shopData.slug}`} />
              </Col>
            </Row>
          </ShopSidebar>
          <ShopSidebar title="Analitycs" onClose={() => setActiveSidebar('')} isVisible={activeSidebar === 'ANALYTICS'}>
            <Row>
              <Col sm={12}>
                {analyticData && <Line data={analyticData} options={options} />}
                {/* <Line data={data2} options={options} /> */}
              </Col>
            </Row>
          </ShopSidebar>
          <Row>
            <Col>
              <Dropzone onDrop={acceptedFiles => _onUploadLogotype(acceptedFiles)}>
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <section className={"LogotypeInput"}>
                    <div className={"LogotypeInput-Container"} {...getRootProps()} style={{ 'background': `url("http://localhost:8080/${shopData.logotype}") center center no-repeat`, 'backgroundSize': 'contain' }}>
                      <input {...getInputProps()} />
                      {
                        isDragActive ?
                          <p>Drop here...</p> :
                          <p>Logotype</p>
                      }
                    </div>
                  </section>
                )}
              </Dropzone>
            </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <div className="mb-3">
                <Input type="text" status="default" label="Shop name" value={shopData.name} onChange={() => { }} />
              </div>
              <div className="mb-3">
                <Input type="text" status="default" label="Shop description" value={shopData.description} onChange={() => { }} />
              </div>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>) :
        <Loader />
      }
      <EditingSection
        titleText="Categories"
        buttonText="Add new"
        isLoaded={categoriesLoaded}
        onButtonClick={() => setCategoryCreateOpen(true)}
        items={categoriesData}
        emptyCardPicture="/images/dashboard/categories-empty.png"
        emptyCardContent="You don't have categories yet"
        modalComponent={() => <CategoryCreate isOpen={categoryCreateOpen} onClose={() => setCategoryCreateOpen(false)} onLoadingEnd={() => { _onCategoryCreated() }} />}
        itemComponent={(item) => <CategoryCard {...item} onClick={() => setEditingCategoryId(item._id)} onDeleteItem={(id) => _onDeleteCategory(id)} />}
      />
      <CategoryEdit
        isOpen={editingCategoryId !== null}
        categoryId={editingCategoryId}
        onClose={() => setEditingCategoryId(null)}
        onLoadingEnd={() => _onCategoryCreated()}
      />
      <EditingSection
        titleText="Products"
        buttonText="Add new"
        isLoaded={productsLoaded}
        emptyCardPicture="/images/dashboard/products-empty.png"
        emptyCardContent="You don't have products yet"
        onButtonClick={() => setProductCreateOpen(true)}
        items={productsData}
        modalComponent={() => <ProductCreate isOpen={productCreateOpen} onClose={() => setProductCreateOpen(false)} onLoadingEnd={() => { _onProductCreated() }} />}
        itemComponent={(item) => <ProductCard {...item} onClick={() => setEditingProductId(item._id)} onDeleteItem={(id) => _onDeleteProduct(id)} />}
      />
      <ProductEdit
        isOpen={editingProductId !== null}
        productId={editingProductId}
        onClose={() => setEditingProductId(null)}
        onLoadingEnd={() => _onProductCreated()}
      />
    </>
  )
};



Edit.getInitialProps = wrapper.getInitialPageProps(store => async (ctx) => {
  const userToken = store.getState().user.token;
  const user = await handleAuthSSR(ctx, userToken);
  return { user }
});

export default Edit;