import React from 'react';

import styles from './TitleLine.module.scss';

const TitleLine = ({ children }) => {
    return (
        <div className={`${styles['TitleLine']}`}>
            <div className={styles['TitleLine-Content']}>
                { children }
            </div>
        </div>
    )
}

export default TitleLine;