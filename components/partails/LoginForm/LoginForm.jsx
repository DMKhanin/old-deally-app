import React, { useState, useEffect, useRef } from 'react';
import { getProviders, getCsrfToken, signIn } from "next-auth/react"

/*** Hooks ***/
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

/*** Components ***/
import { Row, Col } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Link from 'next/link';
import Input from '@controls/Input';
import Button from '@controls/Button';
import H1 from '@typography/H1';
import P from '@typography/P';
import SocialAuthButton from '@controls/SocialAuthButton';

/*** Helpers ***/
import { connect } from 'react-redux';

/*** Actions ***/
import { loginFacebookAction, loginGoogleUserAction, loginUserAction } from '../../../store/actions/UserActions';

const LoginForm = ({ csrfToken, providers }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        signIn("email", data);
    }

    return (
        <>
            <H1>Start selling now!</H1>
            <P>Create your digital store now</P>
            {/* Email and password auth section  */}
            <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
                <input {...register('csrfToken')} type="hidden" defaultValue={csrfToken} />
                <div className="pt-3">
                    <Input useFormProps={register('email')} placeholder="Enter email" />
                </div>
                <div className="pt-4">
                    <Button type="submit">Sign in</Button>
                </div>
            </form>
            {/* Social auth section */}
            <div className="pt-4">
                <P size="small">Or Continue With</P>
            </div>
            <Row className="pt-4">
                {Object.values(providers).map(provider => 
                <>
                    { provider.id !== 'email' &&
                     <Col key={provider.id}>
                        <SocialAuthButton onClick={() => signIn(provider.id)}>
                            <img src={`/images/dashboard/auth/${provider.id}-icon.svg`} />
                        </SocialAuthButton>
                    </Col> }
                </>
                )}
            </Row>
        </>
    )
};
  
  
export default LoginForm;