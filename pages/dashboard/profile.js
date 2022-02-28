import React, { useState, useEffect } from 'react';

/*** Components ***/
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from '@partails/ProfileCard';
import H1 from '../../components/typography/H1';
import Button from '@controls/Button';
import SecurityProfileEditForm from '@partails/SecurityProfileEditForm';
import BasicProfileEditForm from '@partails/BasicProfileEditForm';
import ProfileWallet from '@partails/ProfileWallet';
import ProfileInfo from '@partails/ProfileInfo';
import DashboardLayout from '@layouts/DashboardLayout';

/*** Store ***/
import { wrapper } from "../../store";

/*** API ***/
import { getUser, updateUserInfo, updateUserAvatar } from '@api/DashboardAPI';
/*** Helpers ***/
import handleAuthSSR from '@helpers/handleAuthSSR';

/*** Context ***/
import { ProfilePageContext } from '@contexts';

const Profile = ({ initialProps }) => {
    const { user } = initialProps;
    const [userData, setUserData] = useState({});
    const [infoLoading, setInfoLoading] = useState(false);

    const _fetchUserData = async () => {
        const response = await getUser();
        setUserData(response.data);
    }

    const _updateUserInfo = async (e) => {
        e.preventDefault();
        setInfoLoading(true);
        const formData = new FormData(e.target);
        const { email, firstName, lastName } = Object.fromEntries(formData);
        updateUserInfo({ email, firstName, lastName });
        await  _fetchUserData();
        setInfoLoading(false);
    }

    const _updateUserProfile = async () => {

    }
    
    useEffect(() => { _fetchUserData(); }, [])

    return (
        <DashboardLayout>
            <ProfilePageContext.Provider value={{userData, updateUserInfo: _updateUserInfo, updateuserProfile: _updateUserProfile}}>
                <div>
                    <Container>
                        <Row className="pt-5 pb-5">
                            <Col xl={{span: 10, offset: 1}} lg={{span: 10, offset: 1}} md={{span: 12, offset: 0}} sm={{ span: 12, offset: 0}} xs={{span: 12, offset: 0}} ><H1>My profile</H1></Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xl={{span: 4, offset: 1}} lg={{span: 4, offset: 1}} md={{span: 11, offset: 0}} sm={{ span: 12, offset: 0}} xs={{span: 12, offset: 0}}>
                                <ProfileCard>
                                    <ProfileInfo />
                                </ProfileCard>
                                <ProfileCard color="primary" title="Wallet" >
                                    <ProfileWallet />
                                    <Button size="small" color="white">Request a cash</Button>
                                </ProfileCard>
                            </Col>
                            <Col lg={6} md={11} sm={12} xs={12}>
                                <ProfileCard title="Basic info" >
                                    <BasicProfileEditForm isLoading={infoLoading} />
                                </ProfileCard>
                                <ProfileCard title="Security" >
                                    <SecurityProfileEditForm />
                                </ProfileCard>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ProfilePageContext.Provider>
        </DashboardLayout>
        
    )
}

Profile.getInitialProps = wrapper.getInitialPageProps(store => async (ctx) => {
  const userToken = store.getState().user.token;
  const user = await handleAuthSSR(ctx, userToken);
  return { user }
});

export default Profile;