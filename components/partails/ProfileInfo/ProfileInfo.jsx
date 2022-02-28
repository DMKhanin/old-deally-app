import React, { useContext } from 'react';

import Picture from './components/Picture';
import Verificate from './components/Verificate';

import { ProfilePageContext } from '@contexts';

import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    const data = useContext(ProfilePageContext);
updateUserInfo
    return (
        <div className={`${styles['ProfileInfo']}`}>
            {/* Picture */}
            <div className={`${styles['ProfileInfo-Picture']}`}>
                <Picture picture={ data.avatar} />
            </div>
            {/* Account info */}
            <div className={`${styles['ProfileInfo-Content']}`}>
                <div className={styles['ProfileInfo-Name']}>{ data.firstName } { data.lastName }</div>
                <div className={styles['ProfileInfo-Mail']}>{ data.email }</div>
            </div>
            {/* Account status */}
            <div>
                <Verificate />
            </div>
        </div>
    )
}

export default ProfileInfo;