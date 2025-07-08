import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.leftContent}>
                <nav className={styles.mainNav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link
                                to="/"
                                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
                            >
                                Início
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.authButtons}>
                <Link to="/login" className={styles.loginButton}>Login</Link>
                <Link to="/cadastro" className={styles.registerButton}>Cadastro</Link>
            </div>
        </header>
    );
};

export default Header;
