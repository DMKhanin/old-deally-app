import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, onClick, type, color = 'primary', size = 'default', disabled = false}) => {
    return (
        <button 
            type={type}
            disabled={disabled}
            onClick={onClick ? onClick : () => {}}
            className={`${styles['Button']} ${styles['Button_size_' + size]} ${styles['Button_color_' + color]}`}>
            { children }
        </button>
    )
};

export default Button;