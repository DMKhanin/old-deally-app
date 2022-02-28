import React from 'react';

/*** Components ***/
import DashboardHeader from '@partails/DashboardHeader';

/*** Styles */
import styles from './DashboardLayout.module.scss';

const DashboardLayout = ({ children }) => {
    return (
        <div className={`${styles['DashboardLayout']}`}>
            <DashboardHeader />
            { children }
        </div>
    )
}

export default DashboardLayout;