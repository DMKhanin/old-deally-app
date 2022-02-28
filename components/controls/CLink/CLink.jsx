import React from 'react';
import Link from 'next/link'

import styles from './CLink.module.scss';

const CLink = (props) => {
    return (
        <Link {...props}>
            <a className={`${styles['CLink']} ${props.className}`}>
                { props.children }
            </a>
        </Link>
    )
}

export default CLink;