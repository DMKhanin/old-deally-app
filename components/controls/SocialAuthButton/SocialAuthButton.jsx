import React from 'react';

import styles from './SocialAuthButton.module.scss';

const SocialAuthButton = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={`${styles["SocialAuthButton"]}`}>
            { children }
        </button>
    )
};

export default SocialAuthButton;