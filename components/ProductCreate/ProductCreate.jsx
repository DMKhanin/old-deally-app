import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {createProduct, getCategoriesByShopId} from '../../api/DashboardAPI';
import { Row,Col } from 'react-bootstrap';
import RichTextEditor from './RichTextEditor';
import Checkbox from '../Checkbox';
import CategoryListSelector from '../CategoryListSelector';
import ProductPictureInput from './components/ProductPictureInput';
import ProductFileInput from './components/ProductFileInput';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {ValidationRulesProduct} from '../../formValidators';

const ProductCreate = ({ isOpen, onLoadingEnd, onClose }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [html, setHtml] = useState('');
  const [picture, setPicture] = useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const _onSubmit = async () => {
    setIsLoading(true)
    const formData = new FormData(formRef.current);
    formData.append('picture', picture);
    formData.append('categories', selectedCategories);
    await createProduct({ shopId: id, formData });
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
    };

    fetchData();
  }, [])

  return (
    <Modal
    closeTimeoutMS={500}
    isOpen={isOpen}
    style={{ content: { width: '580px', height: 'calc(100vh - 80px)', left: '50%', top: '40px', transform: 'translateX(-50%)' } }}
    onRequestClose={() => onClose()}
    contentLabel="Example Modal"
  >
    <div>
      <h2 className="pb-4" style={{ fontSize: '28px', position: 'sticky', left: '0', top: '0', 'zIndex': '1', 'background': '#fff' }}>New product</h2>
      <form  ref={formRef} onSubmit={handleSubmit(_onSubmit)}>
        <div className="pt-5">
          <ProductPictureInput onAcceptFiles={(files) => setPicture(files[0])} />
        </div>
        {/* <Col xs={4}> */}
        <div className="pt-5">
          <Input 
          name="name" 
          type="text" 
          status="default" 
          label="Name" 
          validators={ValidationRulesProduct.name}
          register={register}
          state={errors.name ? 'error' : null}
          errorMessageComponent={<ErrorMessage errors={errors} name="name" />}
          />
        </div>
        <div className="pt-5">
          <Input 
            name="price"
            type="text" 
            status="default" 
            label="Price"
            validators={ValidationRulesProduct.price}
            register={register}
            state={errors.price ? 'error' : null}
            errorMessageComponent={<ErrorMessage errors={errors} name="price"/>}
          />
        </div>
        <div className="pt-5">
          { categoriesData ? 
            <CategoryListSelector 
              items={categoriesData}
              selectedCategories={selectedCategories}
              onChange={(categories) => setSelectedCategories(categories)}
            />
          : null } 
        </div>
        <div className="pt-5">
          <RichTextEditor></RichTextEditor>
        </div>
        <div className="pt-5">
          <ProductFileInput />
        </div>
        <div className="pt-5 pb-5">
          <Checkbox name="isVisible" id="product-is-visible" labelText="Display on catalog" />
        </div>
        <div className="pt-0" style={{position: 'sticky', left: '0', bottom: '0', width: '100%'}}>
          <Button 
            type="submit" 
            style="primary" 
            onClick={() => { }} 
            state={isLoading ? 'loading' : false}>
              Add product
          </Button>
        </div>
        {/* </Col> */}
      </form>
      </div>
  </Modal>
  )
}

export default ProductCreate;