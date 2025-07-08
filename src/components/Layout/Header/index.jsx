import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Início
          </Link>
          <Link to="/sobre" className={styles.navLink}>
            Sobre o Projeto
          </Link>
          <Link to="/funciona" className={styles.navLink}>
            Como Funciona?
          </Link>
          <Link to="/ongs" className={styles.navLink}>
            ONGs Parceiras
          </Link>
          <Link to="/contato" className={styles.navLink}>
            Contato
          </Link>
        </div>

        <div className={styles.rightNav}>
          <Link to="/login" className={styles.authLink}>Login</Link>
          <Link to="/cadastro" className={styles.authLink}>Cadastro</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
