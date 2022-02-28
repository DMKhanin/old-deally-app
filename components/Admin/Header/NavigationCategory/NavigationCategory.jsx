import React, { useEffect, useState, useRef } from 'react';
import styles from './NavigationCategory.module.scss';

const NavigationCategory = ({ children, visible, onClose }) => {
  const overlayBlockingElement = useRef(null);

  const _onClose = ({ target }) => {
    if (overlayBlockingElement?.current && target === overlayBlockingElement.current) {
      onClose();
    }
  }

  return (
    <div ref={overlayBlockingElement} className={`${styles[`NavigationCategory`]} ${styles[`NavigationCategory--${visible}`]}`} onClick={(e) => _onClose(e)}>
      <div className={`${styles['NavigationCategory__container']}`}>
        { children }
      </div>
    </div>
  )
};

export default NavigationCategory;