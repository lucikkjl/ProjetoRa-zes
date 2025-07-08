import React from 'react';
import styles from './Input.module.css'; // <-- CORRIGIDO: I maiúsculo

const Input = ({ type, placeholder, icon, value, onChange }) => (
    <div className={styles.inputContainer}>
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        <input
            type={type}
            placeholder={placeholder}
            className={styles.inputField}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default Input;