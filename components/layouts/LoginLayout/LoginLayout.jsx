import React from 'react';
import Image from 'next/image'
/*** Conponents ****/
import { Container, Row, Col } from 'react-bootstrap';
import Header from '@partails/Header';
import Footer from '@partails/Footer';

const LoginLayout = ({ children, picture }) => {
    return (
        <>
            <Header />
            <Container className={'pt-5 mt-5'}>
                <Row className={'align-items-center'}>
                    <Col xl={7} lg={7} className='d-lg-block d-none ' style={{ height: 'inherit'}}>
                        <div className="h-100" style={{ width: '100%', height: '100%' }}>
                             <Image placeholder="blur" width="100%" height="auto"layout="responsive" loading="lazy" src={'/images/dashboard/login-picture.png'} alt="Logotype" />
                        </div>
                    </Col>
                    <Col xl={{span: 4, offset: 0}} lg={{span: 5, offset: 0}} md={{span: 6, offset: 3}} className="pt-5 mt-5">
                        { children }
                    </Col>
                </Row>
            </Container>
            <div className="pt-5 mt-3">
                <Footer />
            </div>
        </>
    )
}

export default LoginLayout;