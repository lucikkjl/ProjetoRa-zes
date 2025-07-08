import React from 'react';
import styles from './Button.module.css'; // <-- CORRIGIDO: B maiúsculo

const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;