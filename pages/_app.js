
import * as Sentry from "@sentry/react";
import Head from 'next/head'
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
// import { Provider } from 'mobx-react';
import { Integrations } from "@sentry/tracing";
import { ToastContainer, Flip } from 'react-toastify';
import CookieDanger from '../components/CookieDanger';
import dynamic from 'next/dynamic'
// import initStore from "../stores/stores";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { PersistGate } from 'redux-persist/integration/react';
import MobileMenu from '@controls/MobileMenu';
// import { register } from 'utils';

// Sentry.init({
//   dsn: "https://53a4bf19daba4c23aed1c8de132f1fb7@o564236.ingest.sentry.io/5704862",
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.scss'
import { useStore } from "react-redux";
import { wrapper } from "../store";
import { useEffect } from "react";
import { Html } from "next/document";
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react"

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());


function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === "loading") return // Do nothing while loading
    if (!isUser) signIn() // If not authenticated, force log in
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const store = useStore();
  const router = useRouter();

  useEffect(() => {
    window.token = store.getState().user?.token;
  }, [store])

  return <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
    </Head>
    {/* <PersistGate loading={null} persistor={store.__persistor}> */}
      <ToastContainer
        transition={Flip}
        hideProgressBar={true}
      />
      <SessionProvider session={session}>
        {Component.auth ? (
           <Auth>
            <Component {...pageProps} />
           </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
      {/* Mobile menu display only dashboard */}
      { router.asPath.includes('dashboard') && <MobileMenu /> }
      <CookieDanger />
    {/* </PersistGate> */}
  </>
}

export default wrapper.withRedux(MyApp)
