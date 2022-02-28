import handleAuthSSR from "../../helpers/handleAuthSSR";
import Head from 'next/head'
import { Cookies } from 'react-cookie';
import { createShop, deleteShop, getShops, getUser, updateUserAvatar, updateUserInfo, updateUserPassword } from "../../api/DashboardAPI";
import ButtonSmall from "../../components/ButtonSmall";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ShopCard from '../../components/ShopCard';
import Modal from 'react-modal';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import ProfileCard from '../../components/ProfileCard';
import Dropzone from "react-dropzone";
import { wrapper } from "../../store";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState({});

  const _updateInfo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, firstName, lastName } = Object.fromEntries(formData);

    // alert('On submit!');
    updateUserInfo({ email, firstName, lastName });
  }

  const _updatePassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { password, repeatPassword, newPassword } = Object.fromEntries(formData);
    updateUserPassword({ password, repeatPassword, newPassword });
  }

  const _fetchUserData = async () => {
    const response = await getUser();
    setUserData(response.data);
  }

  const _uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    await updateUserAvatar(formData);
    await _fetchUserData();
  }

  useEffect(() => {
    _fetchUserData();
  }, [])

  return (
    <>
      <Head>
        <title>Deally | Your profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="pt-5 mt-5">
        <Container>
          <h1>Your profile</h1>
          <div className="pt-4">
            <Row>
              <Col sm={4}>
                <ProfileCard
                  title="Picture"
                  description="Change your profile photo"
                >
                  <Dropzone onDrop={acceptedFiles => _uploadAvatar(acceptedFiles[0])}>
                    {({ getRootProps, getInputProps, isDragActive }) => (
                      <section className={"ProfilePicture"}>
                        <div className={"ProfilePicture-Content"} {...getRootProps()} style={{ 'background': `url("${process.env.API_URL}/${userData.avatar}") center center no-repeat`, 'backgroundSize': 'contain' }}>
                          <input {...getInputProps()} />
                          {
                            isDragActive ?
                              <p>Drop here...</p> :
                              <p>Choose file</p>
                          }
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </ProfileCard>
              </Col>
              <Col sm={8}>
                <ProfileCard
                  title="Account info"
                  description="Basic account info"
                >
                  <form onSubmit={(e) => _updateInfo(e)}>
                    <Row>
                      <Col sm={6} className="pb-3">
                        <Input defaultValue={userData.firstName} name="firstName" status="default" label="First name" />
                      </Col>
                      <Col sm={6} className="pb-3">
                        <Input defaultValue={userData.lastName} name="lastName" status="default" label="Last name" />
                      </Col>
                      <Col sm={12} className="pb-3">
                        <Input defaultValue={userData.email} name="email" status="default" label="Email" />
                      </Col>
                      <Col sm={12} className="pb-2">
                        <Container>
                          <Row>
                            <ButtonSmall onClick={() => { }} type="submit">Save changes</ButtonSmall>
                            <ButtonSmall border={false} style="danger">Reset changes</ButtonSmall>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </form>
                </ProfileCard>
                <ProfileCard
                  title="Password"
                  description="Change password"
                >
                  <form onSubmit={(e) => _updatePassword(e)}>
                    <Row>
                      <Col sm={6} className='pb-3'>
                        <Input defaultValue="password" name="password" status="default" type="password" label="Current password" />
                      </Col>
                      <Col sm={6} className='pb-3'>
                        <Input name="repeatPassword" status="default" type="password" label="Repeat current password" />
                      </Col>
                      <Col sm={12} className='pb-3'>
                        <Input name="newPassword" status="default" type="password" label="New password" />
                      </Col>
                      <Col sm={12} className="pb-2">
                        <Container>
                          <Row>
                            <ButtonSmall onClick={() => { }}>Save changes</ButtonSmall>
                            <ButtonSmall border={false} style="danger">Reset changes</ButtonSmall>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </form>
                </ProfileCard>
                <ProfileCard
                  title="Payment methods"
                >
                  <Row>
                    <Col sm={12} className="pb-3">
                      <Input status="default" label="Paypal developer key" />
                    </Col>
                    <Col sm={12} className="pb-2">
                      <Container>
                        <Row>
                          <ButtonSmall>Save changes</ButtonSmall>
                          <ButtonSmall border={false} style="danger">Reset changes</ButtonSmall>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </ProfileCard>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>

  )
};

Profile.getInitialProps = wrapper.getInitialPageProps(store => async (ctx) => {
  const userToken = store.getState().user.token;
  const user = await handleAuthSSR(ctx, userToken);
  return { user }
});


export default Profile;