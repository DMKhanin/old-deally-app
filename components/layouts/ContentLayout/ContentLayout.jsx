import React from 'react';
import Header from '@partails/Header';
import Footer from '@partails/Footer';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './ContentLayout.module.scss';

const ContentLayout = ({ title = 'Terms of use', updateDate = '29.04.2021', children }) => {
    return (
        <>
            <Header />
            <Container className={'pt-5'}>
                <Row>
                <Col xl={{span: 10, offset: 1}} lg={{span: 10, offset: 1}} md={{span: 12, offset: 0}} sm={{ span: 12, offset: 0}} xs={{span: 12, offset: 0}} >
                    <div className={`${styles['ContentLayout-Header']}`}>
                        <h1 className={`${styles['ContentLayout-Title']}`}>{ title }</h1>
                        <span  className={`${styles['ContentLayout-Date']}`}>Last update: { updateDate }</span>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col xl={{span: 10, offset: 1}} lg={{span: 10, offset: 1}} md={{span: 12, offset: 0}} sm={{ span: 12, offset: 0}} xs={{span: 12, offset: 0}} >
                        <div className={`${styles['ContentLayout-Content']} mt-5`}>
                            { children } 
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ContentLayout;