import React from "react";

/*** Components ***/
import { Container } from "react-bootstrap";
import Profile from './components/Profile';
import Wallet from './components/Wallet';

/*** Styles ***/
import styles from './DashboardHeader.module.scss';

const DashboardHeader = () => {
    return (
        <header className={`${styles['DashboardHeader']}`}>
            <Container fluid >
                <div className={`${styles['DashboardHeader-Container']}`}>
                    <div className={`${styles['DashboardHeader-Column']} ${styles['DashboardHeader-Column_left']}`}>
                        <img src="/images/common/logotype.svg" alt="Logotype" />
                    </div>
                    <div className={`${styles['DashboardHeader-Column']} ${styles['DashboardHeader-Column_right']}`}>
                        <Wallet />
                        <Profile />
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default DashboardHeader;