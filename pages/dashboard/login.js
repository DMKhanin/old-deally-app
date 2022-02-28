import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import Head from 'next/head'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ErrorMessage } from '@hookform/error-message';
import { ValidationRulesLogin } from '../../formValidators';
import Link from 'next/link';
import { loginFacebookAction, loginGoogleUserAction, loginUserAction } from '../../store/actions/UserActions';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { Col, Row } from 'react-bootstrap';

const Login = ({ loginUser, loginFacebook, loginGoogle, user }) => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();

  const _auth = async (email, password) => {
    setIsLoading(true);
    await loginUser({ email, password });
    setIsLoading(false);
  }

  const _onSubmitForm = () => {
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    _auth(email, password);
  }

  const _onGoogleLogin = ({ googleId}) => {
    loginGoogle({ googleId })
  }

  const _onFacebookLogin = ({ userID }) => {
    loginFacebook({ userID });
  }

  useEffect(() => {
    if (user?.token) router.push('/dashboard');
  }, [user])

  return (
    <>
      <Head>
        <title>Deally | Log in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="LoginPage">
        <div className="LoginPage__logotype">
          <Link href="/">
            <img src={'/images/common/logotype-white.svg'} alt="Logotype" />
          </Link>
        </div>
        <div className="LoginForm">
          <h1 className="LoginForm__title">Log in</h1>
          <form ref={formRef} className="LoginForm__fields" onSubmit={handleSubmit(_onSubmitForm)}>
            <div className="LoginForm__field">
              <Input
                type="text"
                label="E-mail"
                placeholder="E-mail"
                name="email"
                status="primary"
                validators={ValidationRulesLogin.email}
                state={errors.email ? 'error' : null}
                register={register}
                errorMessageComponent={<ErrorMessage errors={errors} name="email" />}
              />
            </div>
            <div className="LoginForm__field">
              <Input
                type="password"
                label="Password"
                placeholder="Password"
                name="password"
                status="primary"
                state={errors.password ? 'error' : null}
                validators={ValidationRulesLogin.password}
                register={register}
                errorMessageComponent={<ErrorMessage errors={errors} name="password" />}
              />
            </div>
            <div className="LoginForm__field LoginForm__field--last">
              <Button type="submit" style="primary" state={isLoading ? 'loading' : false}>Log in</Button>
            </div>
            
          </form><Row className={'pt-4'}>
              <Col>
                <FacebookLogin
                  appId={'275309957680000'}
                  fields="name,email,picture"
                  onClick={() => console.log('clicked!')}
                  render={renderProps => (
                    <Button role="button" style="primary" onClick={ renderProps.onClick} disabled={renderProps.disabled}>Facebook</Button>
                  )}
                  callback={(response) => _onFacebookLogin(response)}
                />
              </Col>
              <Col>
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  render={renderProps => (
                    <Button role="button" style="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</Button>
                  )}
                  buttonText="Login"
                  onSuccess={(response) => _onGoogleLogin(response)}
                  onFailure={(response) => console.log(response)}
                  cookiePolicy={'single_host_origin'}
                />
              </Col>
            </Row>
            <div className="LoginForm__footer">
              <p className="LoginForm__footer-text">You need account?</p>
              <Link href="/dashboard/signup"><span className="LoginForm__footer-link">Create account</span></Link>
            </div>
        </div>
      </div>
    </>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: ({ email, password }) => dispatch(loginUserAction({ email, password })),
    loginFacebook: ({ userID }) => dispatch(loginFacebookAction({ userID })),
    loginGoogle: ({ googleId }) => dispatch(loginGoogleUserAction({ googleId }))
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);