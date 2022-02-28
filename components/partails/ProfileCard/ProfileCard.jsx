import React from 'react';

import styles from './ProfileCard.module.scss';

const ProfileCard = ({ title, children, color }) => {
    return (
        <div className={`${styles['ProfileCard']} ${styles['ProfileCard_color_' + color ]}`}>
            { title && <h2 className={styles['ProfileCard-Title']}>{ title }</h2>}
            <div className={styles['ProfileCard-Content']}>
                { children }
            </div>
        </div>
    )
};

export default ProfileCard;