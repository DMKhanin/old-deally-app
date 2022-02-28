import React, { useState } from 'react';
import CLink from '@controls/CLink';

import styles from './Verificate.module.scss';

const Verificate = () => {

    const TYPES = {
        success: 'verificated',
        error: 'not-verificated',
        pending: 'pending',
    }
    const [status, setStatus] = useState(TYPES.error);

    return (
        <div className={`${styles['Verificate']}`}>
            { status !== null &&
            <>
                <span className={`${styles['Verificate-Status']} ${styles['Verificate-Status_color_' + status]}`}>Profile not verificated</span>
                <CLink href="#" className={styles['Verificate-Link']}>Verificate profile</CLink>
                {/* <Button size="small">Verificate profile</Button> */}
            </>
            }
        </div>
    )
}

export default Verificate;