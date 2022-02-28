
import React, { useEffect, useState, useRef } from 'react';

import Button from '../Button';
import { createCategory, getCategoryById, updateCategory } from '../../api/DashboardAPI';
import Input from '../Input';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Loader from '../Loader';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const CategoryEdit = ({ onLoadingEnd, isOpen, onClose, categoryId }) => {

  const formRef = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const _onSubmit = async () => {
    setIsLoading(true)
    const formData = new FormData(e.target);
    const { name } = Object.fromEntries(formData);
    await updateCategory({ name, shopId: id, categoryId });
    onLoadingEnd();
    setIsLoading(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCategoryById({ shopId: id, categoryId});
      setCategoryData(data);
    }

    if (categoryId !== null) {
      fetchData();
    }

    return () => {
      setCategoryData(null);
    }
  }, [categoryId])

  return (
    <Modal
    closeTimeoutMS={500}
    isOpen={isOpen}
    onRequestClose={() => onClose()}
    style={{ content: { width: '440px', height: '390px', left: '50%', top: '200px', transform: 'translateX(-50%)' } }}
    contentLabel="Example Modal"
  >
    { categoryData !== null && categoryId !== null ?
    <>
      <h2 style={{ fontSize: '28px' }}>Editing { categoryData.name }</h2>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <div className="pt-5">
          <Input 
          type="text" 
          status="default" 
          defaultValue={categoryData.name} 
          label="Category name" name="name"
          validators={{
            required: 'Name cannot be empty',
            minLength: {
              value: 3,
              message: 'Min length 3 symbols'
            },
            maxLength: {
              value: 255,
              message: 'Max length 255 symbols'
            }
          }}
          register={register}
          state={errors.name ? 'error' : null}
          errorMessageComponent={<ErrorMessage errors={errors} name="name" />}
          />
        </div>
        <div className="pt-5">
          <Button type="submit" style="primary" onClick={() => { }} state={isLoading ? 'loading' : false}>Save changes</Button>
        </div>
      </form>
      </> : <Loader /> }
  </Modal>
  )
};

export default CategoryEdit;