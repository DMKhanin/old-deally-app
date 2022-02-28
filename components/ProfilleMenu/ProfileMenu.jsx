import React, { useContext } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

/*** Styles ***/
import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
  const user = useSelector(store => store.user);

  return (
    <div className={`${styles["ProfileMenu"]}`}>
        <div className={`${styles["ProfileMenu-Picture"]}`}>
          { user.email?.substr(0,2) }
        </div>
      <div className={styles["ProfileMenu-Container"]}>
        <div className={styles["ProfileMenu-Navigation"]}>
          <Link href="/dashboard/profile">
            <div className={styles["ProfileMenu-NavigationLink"]}>Profile</div>
          </Link>
          <Link href="/dashboard/logout">
            <div className={styles["ProfileMenu-NavigationLink"]}>Logout</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;