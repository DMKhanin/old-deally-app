import React, { useState } from 'react';

/*** Styles ***/
import styles from './QuickActions.module.scss';

const QuickActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles['QuickActions']}`}>
            <div className={`${styles['QuickActions-Overlay']} ${styles['QuickActions-Overlay_visible_' + isOpen]}`} onClick={() => setIsOpen(false)}></div>
            <button className={`${styles['QuickActions-Button']} ${styles['QuickActions-Button_visible_' + isOpen]}`} onClick={() => setIsOpen(true)}>•••</button>
            <div className={`${styles['QuickActions-Menu']} ${styles['QuickActions-Menu_visible_' + isOpen]}`}>
                <ul className={`${styles['QuickActions-List']}`}>
                    <li className={`${styles['QuickActions-ListItem']} ${styles['QuickActions-ListItem_disabled_true']}`}>Rename</li>
                    <li className={`${styles['QuickActions-ListItem']}`}>Delete</li>
                </ul>
            </div>
        </div>
    )
}

export default QuickActions;