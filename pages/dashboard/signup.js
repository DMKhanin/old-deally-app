import React, { useState } from 'react';
import Head from 'next/head'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useRouter } from 'next/router'
import { registerUser, registerFacebookUser, registerGoogleUser } from '../../api/DashboardAPI';
import Link from 'next/link';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import { Col, Row } from 'react-bootstrap';

const Signup = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const _signUp = async (email, password) => {
    setIsLoading(true);
    const response = registerUser({ email, password });
    setIsLoading(false);
    if (response.data.redirect === true) {
      router.push('/dashboard/login');
    }
  };

  const _onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    _signUp(email, password);
  }

  const _onFacebookSignup = async ({ email, userID, picture, name }) => {
    await registerFacebookUser({ email, userID, picture, name });
    router.push('/dashboard/login');
  }

  const _onGoogleSignup = async (response) => {
    await registerGoogleUser({ ...response.profileObj });
    router.push('/dashboard/login');
  }

  return (
    <>
      <Head>
        <title>Deally | Sign up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head><div className="LoginPage">
        <div className="LoginPage__logotype">
          <Link href="/">
            <img src={'/images/common/logotype-white.svg'} alt="Logotype" />
          </Link>
        </div>
        <div className="LoginForm">
          <h1 className="LoginForm__title">Sign up</h1>
          <form className="LoginForm__fields" method="POST" onSubmit={(e) => { _onSubmitForm(e) }}>
            <div className="LoginForm__field">
              <Input type="text" label="E-mail" placeholder="E-mail" name="email" status="primary" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="LoginForm__field">
              <Input type="password" label="Password" placeholder="Password" name="password" status="primary" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="LoginForm__field">
              <Input type="password" label="Repeat password" placeholder="Password" name="repeat-password" status="primary" onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="LoginForm__field LoginForm__field--last">
              <Button type="submit" style="primary" state={isLoading ? 'loading' : false}>Sign up</Button>
            </div>
          </form>
            <Row className={'pt-4'}>
              <Col>
                <FacebookLogin
                  appId={'275309957680000'}
                  fields="name,email,picture"
                  onClick={() => console.log('clicked!')}
                  render={renderProps => (
                    <Button role="button" style="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Facebook</Button>
                  )}
                  callback={(response) => _onFacebookSignup(response)}
                />
              </Col>
              <Col>
                <GoogleLogin
                  clientId="43129630379-6ggdl5n5dtvmcm9popc3fa28q3o5si64.apps.googleusercontent.com"
                  render={renderProps => (
                    <Button role="button" style="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</Button>
                  )}
                  buttonText="Login"
                  onSuccess={(response) => _onGoogleSignup(response)}
                  onFailure={(response) => console.log(response)}
                  cookiePolicy={'single_host_origin'}
                />
              </Col>
            </Row>
          <div className="LoginForm__footer">
            <p className="LoginForm__footer-text">You created an account earlier?</p>
            <Link href="/dashboard/login"><span className="LoginForm__footer-link">Log in</span></Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Signup;