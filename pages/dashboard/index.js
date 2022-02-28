import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import H1 from '../../components/typography/H1';
import Button from '@controls/Button';
import DashboardLayout from '@layouts/DashboardLayout';
import ShopCard from '@partails/ShopCard';

const Profile = () => {
    return (
        <DashboardLayout>
            <div>
                <Container>
                    <Row className="pt-5 pb-5">
                        <Col><H1>All shops</H1></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            <ShopCard />
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <ShopCard />
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <ShopCard />
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <ShopCard />
                        </Col>
                        <Col lg={4} md={6} sm={12} >
                            <ShopCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        </DashboardLayout>
        
    )
}

Profile.auth = {
    role: "admin",
    unauthorized: "/login-with-different-user", // redirect to this url
}

export default Profile;