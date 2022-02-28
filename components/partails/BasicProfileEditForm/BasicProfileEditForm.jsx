import React, { useContext } from 'react';

import OutlineInput from '@controls/OutlineInput';
import Button from '@controls/Button';
import { Col, Row } from 'react-bootstrap';
import { Rings } from 'react-loading-icons'
import { ProfilePageContext } from '@contexts';

import { useForm } from "react-hook-form";
// import { ValidationRulesUserInfo } from '@formValidators/index.js';

const BasicProfileEditForm = ({ isLoading }) => {
    const {userData, updateUserInfo } = useContext(ProfilePageContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    return (
        <form onSubmit={(e) => updateUserInfo(e)}>
            <Row>
                <Col>
                    <OutlineInput
                        // validators={ValidationRulesUserInfo.firstName}
                        state={errors.firstName ? 'error' : null}
                        name="firstName"
                        defaultValue={userData.firstName}
                        placeholder="Enter first name"
                    />
                </Col>
                <Col>
                    <OutlineInput
                        // validators={ValidationRulesUserInfo.lastName}
                        state={errors.lastName ? 'error' : null}
                        name="lastName"
                        defaultValue={userData.lastName} 
                        placeholder="Enter last name" 
                     />
                </Col>
            </Row>
            <Row>
                <Col>
                    <OutlineInput
                        // validators={ValidationRulesUserInfo.email}
                        state={errors.email ? 'error' : null}
                        name="email"
                        defaultValue={userData.email}
                        placeholder="Enter email"
                    />
                </Col>
            </Row>
            <Row className="pt-3">
                <Col lg={5} sm={6}>
                    <Button size="small" disabled={isLoading}>
                        {!isLoading && <>Save</> }
                        { isLoading && <Rings /> }
                    </Button>
                </Col>
                <Col lg={5} sm={6}>
                    <Button size="small" color="white"  disabled={isLoading}>
                        <>Reset</>
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default BasicProfileEditForm;