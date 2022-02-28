import React from 'react';
import styles from './Picture.module.scss';

const Picture = ({ picture }) => {
    const fallback = "/images/dashboard/avatar-fallback.svg";
    return (
        <div className={`${styles['Picture']}`}>
            <picture className={styles['Picture-Container']}>
                <img src={styles['Picture-Fallback']} src={picture ? `//localhost:4000/${picture}` : fallback} alt="" />
            </picture>
            <button className={`${styles['Picture-Button']}`}>
                <img src="/images/dashboard/edit.svg" alt="Picture Button" />
            </button>
        </div>
    )
}

export default Picture;