import React from 'react';

import styles from './ProfileCard.module.scss';

const ProfileCard = ({ title, children }) => {
  return (
    <div className={styles["ProfileCard"]}>
      <div className={styles["ProfileCard-Header"]}>
        <h2 className={styles["ProfileCard-Title"]}>
          { title }
        </h2>
      </div>
      <div className={styles["ProfileCard-Content"]}>
        { children }
      </div>
    </div>
  )
}

export default ProfileCard;