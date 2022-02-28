import React, { useState, useRef } from 'react';

/*** Components ***/
import { Row, Col } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import Link from 'next/link';
import SocialAuthButton from '@controls/SocialAuthButton';
import Input from '@controls/Input';
import Button from '@controls/Button';
import H1 from '@typography/H1';
import P from '@typography/P';

/*** API ***/
import { 
    registerUser, 
    registerFacebookUser, 
    registerGoogleUser 
} from '@api/DashboardAPI';

/*** Helpers ***/
import { useRouter } from 'next/router'

const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const router = useRouter()
  
    const _signUp = async (email, password) => {
      setIsLoading(true);
      const response = await registerUser({ email, password });
      setIsLoading(false);
      if (response.data.redirect === true) {
        router.push('/signin');
      }
    };
  
    const _onSubmitForm = (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);
      const { email, password } = Object.fromEntries(formData);
      _signUp(email, password);
    }
  
    const _onFacebookSignup = async ({ email, userID, picture, name }) => {
      await registerFacebookUser({ email, userID, picture, name });
      router.push('/signin');
    }
  
    const _onGoogleSignup = async (response) => {
      await registerGoogleUser({ ...response.profileObj });
      router.push('/signin');
    }

    return (
        <>
            <H1>Sign up</H1>
            <P>Create your digital store now</P>
            <form ref={formRef} onSubmit={(e) => _onSubmitForm(e)} className="pt-5">
                <div className="pt-3">
                    <Input name="email" placeholder="Enter email" />
                </div>
                <div className="pt-4">
                    <Input name="password" type="password" placeholder="Enter password" />
                </div>
                <div className="pt-4">
                    <Input type="password" placeholder="Confirm password" />
                </div>
                <div className="pt-4">
                    <Button>Sign up</Button>
                </div>
            </form>
            <div className="pt-4">
                <P size="small">Or Continue With</P>
            </div>
            <Row className="pt-4">
                <Col>
                    <FacebookLogin
                        appId={'275309957680000'}
                        fields="name,email,picture"
                        callback={(response) => _onFacebookSignup(response)}
                        render={({onClick, disabled}) => (
                            <SocialAuthButton onClick={onClick} disabled={disabled} loader={isLoading}>
                                <img src={'/images/dashboard/auth/facebook-icon.svg'} />
                            </SocialAuthButton>
                        )} />
                </Col>
                <Col>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(response) => _onGoogleSignup(response)}
                        onFailure={(response) => console.log(response)}
                        cookiePolicy={'single_host_origin'}
                        render={({onClick, disabled}) => (
                            <SocialAuthButton onClick={onClick} disabled={disabled} loader={isLoading}>
                                <img src={'/images/dashboard/auth/google-icon.svg'} />
                            </SocialAuthButton>
                        )} />
                </Col>
            </Row>
            <div className="pt-4">
                <P size="small">If you have account You can <Link href="/signin"><a>Sign In!</a></Link></P>
            </div>
        </>
    )
};

export default SignUpForm;