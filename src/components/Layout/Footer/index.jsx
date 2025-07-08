import React from 'react';
import styles from './Footer.module.css'; // <-- CORRIGIDO: F maiúsculo

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Sobre o projeto</h3>
                    <ul>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Objetivo</a></li>
                        <li><a href="#">Termos de uso</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="#">Voluntariado</a></li>
                        <li><a href="#">ONGs Parceiras</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2025 Projeto. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;