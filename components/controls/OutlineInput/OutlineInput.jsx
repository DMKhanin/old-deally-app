import React from 'react';

import styles from './OutlineInput.module.scss';

const OutlineInput = ({ placeholder, name, defaultValue, type = 'text', status = 'default', errorMessage }) => {
    return (
        <div className={`${styles['OutlineInput']}`}>
            <input name={name} defaultValue={defaultValue} placeholder={placeholder} type={type} className={`${styles['OutlineInput-Field']} ${styles['OutlineInput-Field_status_' + status]}`} />
            <span className={styles['OutlineInput-Error']}>
                { errorMessage }
            </span>
        </div>
    )
}

export default OutlineInput;