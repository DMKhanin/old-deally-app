import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

import Input from '../Input';
import Button from '../Button';

import {createProduct, getCategoriesByShopId, getProductById, updateProduct, getFiles, uploadFile} from '../../api/DashboardAPI';
import { Row,Col, Container } from 'react-bootstrap';
import RichTextEditor from './RichTextEditor';
import Checkbox from '../Checkbox';
import CategoryListSelector from '../CategoryListSelector';
import ProductPictureInput from './components/ProductPictureInput';
import ProductFileInput from './components/ProductFileInput';
import Loader from '../Loader';
import FilesList from './components/FilesList';
import { connect } from 'react-redux';
import { getFilesByProductId } from '../../store/actions/FilesActions';


const ProductEdit = ({ isOpen, onLoadingEnd, onClose, productId = null, files = [], loadProductFiles }) => {
  
  const router = useRouter();
  const { id } = router.query;
  // const [ files, setFiles ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [html, setHtml] = useState('');
  const [picture, setPicture] = useState([]);
  const [productData, setProductData] = useState(null);

  const _toggleSelectCategory = (id) => {
  }

  const _onUploadProductFile = async (files) => {
    let formData = new FormData();
    formData.append('file', files[0]);
    await uploadFile({ id, productId, formData });
    loadProductFiles(productId);
  }

  const _onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData(e.target);
    formData.append('picture', picture);
    formData.append('categories', selectedCategories);
    const updatedProductDataResponse = await updateProduct({ shopId: id, productId, formData });
    setProductData(updatedProductDataResponse);
    onLoadingEnd();
    setIsLoading(false);
  }

  const _onChangeDescription = ({ target }) => {
    setHtml(target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
        const categoriesDataResponse = await getCategoriesByShopId({ shopId: id });
        setCategoriesData(categoriesDataResponse)
        const productDataResponse = await getProductById({ shopId: id, productId});
        setProductData(productDataResponse);
        // const fileListResponse = await getFiles({ productId });
        // setFiles(fileListResponse.list);
        loadProductFiles(productId);
    };
    
    if (productId !== null) {
      fetchData();
    } 

    return () => {
      setProductData(null);
      setCategoriesData(null);
      setSelectedCategories([]);
    }
  }, [productId])

  useEffect(() => {
    if (productData?.categories) {
      setSelectedCategories(productData.categories.slice(','));
    } else {
      setSelectedCategories([]);
    }
  }, [productData])

  return (
    <Modal
    closeTimeoutMS={500}
    isOpen={isOpen}
    style={{ content: { width: 'calc(100% - 80px)', height: 'calc(100vh - 80px)', left: '50%', top: '40px', transform: 'translateX(-50%)' } }}
    onRequestClose={() => onClose()}
    contentLabel="Example Modal"
  >
    { (productData !== null && productId !== null) || isLoading ?
    <div>
      <h2 className="pb-4" style={{ fontSize: '28px', position: 'sticky', left: '0', top: '0', 'zIndex': '1', 'background': '#fff' }}>
        Editing product {productData.name}
      </h2>
      {/* <Container> */}
        <Row>
          <Col sm={4}>
          <form onSubmit={(e) => {_onSubmit(e)}}>
        <div className="pt-5">
          <ProductPictureInput onAcceptFiles={(files) => setPicture(files[0])} />
        </div>
        {/* <Col xs={4}> */}
        <div className="pt-5">
          <Input 
            type="text" 
            status="default" 
            label="Prouct name" 
            defaultValue={productData.name}
            name="name" />
        </div>
        <div className="pt-3">
          <Input 
            type="number" 
            status="default" 
            label="Product price" 
            defaultValue={productData.price}
            name="price" />
        </div>
        <div>
          { categoriesData ? 
            <CategoryListSelector 
              items={categoriesData}
              selectedCategories={selectedCategories}
              onChange={(categories) => setSelectedCategories(categories)}
            />
          : null } 
        </div>
        <div className="pt-3">
          <RichTextEditor></RichTextEditor>
        </div>
        {/* <div className="pt-5"> */}
          {/* <ProductFileInput /> */}
        {/* </div> */}
        <div className="pt-4 pb-5">
          <Checkbox name="isVisible" id="product-is-visible" labelText="Display on catalog" />
        </div>
        <div className="pt-0" style={{position: 'sticky', left: '0', bottom: '0', width: '100%'}}>
          <Button 
            type="submit" 
            style="primary" 
            onClick={() => { }} 
            state={isLoading ? 'loading' : false}>
              Save changes
          </Button>
        </div>
        {/* </Col> */}
      </form>
          </Col>
          <Col sm={8} className={'pt-5'}>
            <ProductFileInput onDrop={(files) => _onUploadProductFile(files)}/>
            <br />
            {/* { JSON.stringify(files) } */}
            <FilesList items={files}></FilesList>
          </Col>
        </Row>
      {/* </Container> */}
      
      </div>
      : <Loader />}
  </Modal>
  )
}
const mapStateToProps = (state) => {
  return {
    files: state.files
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    loadProductFiles: (productId) => dispatch(getFilesByProductId(productId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);