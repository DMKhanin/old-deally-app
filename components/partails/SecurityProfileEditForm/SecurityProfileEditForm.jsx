import React from 'react';
import OutlineInput from '@controls/OutlineInput';
import { Row, Col } from 'react-bootstrap';
import Button from '@controls/Button';
import CLink from '@controls/CLink';
import TitleLine from '@partails/TitleLine';

import styles from './SecurityProfileEditForm.module.scss';

const SecurityProfileEditForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <OutlineInput type="password" placeholder="Enter new password" />
                </Col>
                <Col>
                    <OutlineInput type="password" placeholder="Repeat new password" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <OutlineInput type="password" placeholder="Enter current password" />
                </Col>
            </Row>
            <Row className="pt-3">
                <Col lg={5} sm={6}>
                    <Button size="small">Save</Button>
                </Col>
                <Col lg={5} sm={6}>
                    <Button size="small" color="white">Reset</Button>
                </Col>
            </Row>
            <TitleLine>Other auth method</TitleLine>
            <CLink href="#" className={styles['SecurityProfileEditForm-Link']}>Connect google account</CLink>
            <CLink href="#" className={styles['SecurityProfileEditForm-Link']}>Connect facebook account</CLink>
        </form>
    )
};

export default SecurityProfileEditForm;