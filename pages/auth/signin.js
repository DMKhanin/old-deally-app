import React, { useEffect, useState } from 'react';
import { getProviders, getCsrfToken, signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router'

import Head from 'next/head'
import LoginLayout from '@layouts/LoginLayout';
import LoginForm from '@partails/LoginForm';

import picture from '../../public/images/dashboard/login-picture.png';
// import picture from '@public/images/dashboard/login-picture.png';

const useAuthData = () => {
  const [csrfToken, setCsrfToken] = useState(false);
  const [providers, setProviders] = useState(false);

  const fetchData = async () => {
    const responseToken = await getCsrfToken();
    const responseProviders = await getProviders()
    setCsrfToken(responseToken);
    setProviders(responseProviders)
  }

  useEffect(fetchData, []);
  return [csrfToken, providers];
}

const Login = () => {
  const [csrfToken, providers] = useAuthData();

  return (
    <>
      <Head>
        <title>Deally - Sign in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { csrfToken && providers && 
        <LoginLayout pictuare={picture}>
          <LoginForm providers={providers} csrfToken={csrfToken} />
        </LoginLayout>
      }
      
    </>
  ) 
}

export default Login;