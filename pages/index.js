import React from 'react';
import { Html, Head } from 'next/document'

/*** Helpers ***/
import { useRouter } from 'next/router';

/*** Components ***/
import Header from '@partails/Header';
import MainPageSection from '@partails/MainPageSection';
import MainPageCover from '@partails/MainPageCover';
import MainPageVideo from '@partails/MainPageVideo';
import MainPageStartUsing from '@partails/MainPageStartUsing';
import Button from '@controls/Button';
import Footer from '@partails/Footer';
import Payeer from '@components/payments/Payeer';

const Home = () => {
    const router = useRouter();
    // const shopSlug = window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;


    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }
    
    return (
        <>
            {/* { !shopSlug &&  */}
            <>
                <script src="https://www.google.com/recaptcha/api.js" />
                <Header />
                <MainPageCover title="this is <span>Deally.io</span>" description="A web service, for sale digital goods" />
                <MainPageSection titleSize='small' title="<span>Easy</span> template editor" description="Easily create and publish Web shops. Build shop and sale our products.">
                    <MainPageVideo />
                </MainPageSection>
                <Payeer />
                <form id="demo-form"></form>
                    <button class="g-recaptcha" 
                    data-sitekey="r6LeznlwdAAAAACDjcBVVP1xPw796P-ti6WRfOaZf" 
                    data-callback={onSubmit} 
                    data-action='submit'>Submit</button>
                <MainPageSection titleSize='small' title="<span>Real time</span> analytics" description="Easily create and publish Web shops. Build shop and sale our products.">
                    <MainPageVideo />
                </MainPageSection>
                <MainPageSection titleSize='small' title="Try the <span>Beta release</span>" description="Deally is still very early, but we would love to see what you can build with it at this stage!">
                    <MainPageStartUsing>
                        <Button onClick={() => router.push('/signup')}>Start selling now</Button>
                    </MainPageStartUsing>
                </MainPageSection>
                <MainPageSection titleSize='big' title="Contacts" description="Feel free to reach out! Also, if you are a Developer or Designer and you want to get involved, write us at:">
                    <MainPageStartUsing>
                        <Button color='white' onClick={() => document.location.href = 'mailto:support@deally.io'}>support@deally.io</Button>
                    </MainPageStartUsing>
                </MainPageSection>
                <Footer />
            </>
            {/* }
            { shopSlug && 
            <>
                { shopSlug }
            </>
            } */}
        </>
    )
}

export default Home;