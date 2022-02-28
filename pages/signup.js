import React, { useEffect } from 'react';
import Head from 'next/head'
import { connect } from 'react-redux';
import LoginLayout from '@layouts/LoginLayout';
import SignUpForm from '@partails/SignUpForm';

import picture from './../public/images/dashboard/signup-picture.png';

const Register = ({ user }) => {
  useEffect(() => {
    if (user?.token) router.push('/dashboard');
  }, [user])

  return (
    <>
      <Head>
        <title>Deally | Log in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginLayout picture={picture}>
        <SignUpForm />
      </LoginLayout>
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Register);