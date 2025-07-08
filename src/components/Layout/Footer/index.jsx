import React from 'react';
import styles from './Footer.module.css';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h4 className={styles.contactTitle}>Contato</h4>
                    <p className={styles.contactDetail}>
                        <MdEmail className={styles.icon} /> emailprojeto@gmail.com
                    </p>
                    <p className={styles.contactDetail}>
                        <MdLocationOn className={styles.icon} /> Joinville, SC
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
