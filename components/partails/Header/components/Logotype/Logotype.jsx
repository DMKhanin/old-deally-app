import React from 'react';

/*** Styles ***/
import styles from './Logotype.module.scss';

const Logotype = () => {
    return (
        <div className={`${styles["Logotype"]}`}>
            <img src={'/images/common/logotype.svg'} alt="Logotype" />
        </div>
    )
}

export default Logotype;