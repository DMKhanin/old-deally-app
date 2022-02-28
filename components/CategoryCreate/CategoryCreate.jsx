
import React, { useState, useRef } from 'react';

import Button from './../../components/Button';
import { createCategory } from '../../api/DashboardAPI';
import Input from '../Input';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { ValidationRulesCategory } from '../../formValidators';

const CategoryCreate = ({ onLoadingEnd, isOpen, onClose }) => {

  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const formRef = useRef(null);

  const _onSubmit = async (e) => {
    setIsLoading(true)
    const formData = new FormData(formRef.current);
    const { name } = Object.fromEntries(formData);
    await createCategory({ name, shopId: id });
    onLoadingEnd();
    setIsLoading(false);
  }

  return (
    <Modal
    closeTimeoutMS={500}
    isOpen={isOpen}
    onRequestClose={() => onClose()}
    style={{ content: { width: '440px', height: 'min-content', left: '50%', top: '200px', transform: 'translateX(-50%)' } }}
    contentLabel="Example Modal"
  >
    <>
      <h2 style={{ fontSize: '28px' }}>New category</h2>
      <form ref={formRef} onSubmit={handleSubmit(_onSubmit)}>
        <div className="pt-5">
          <Input 
            type="text" 
            status="default" 
            label="Category name" 
            name="name"
            validators={ValidationRulesCategory.name}
            register={register}
            state={errors.name ? 'error' : null}
            errorMessageComponent={<ErrorMessage errors={errors} name="name" />}
            />
        </div>
        <div className="pt-5">
          <Button 
            type="submit" 
            style="primary" 
            onClick={() => { }} 
            state={isLoading ? 'loading' : false}>Add category</Button>
        </div>
      </form>
      </>
  </Modal>
  )
};

export default CategoryCreate;