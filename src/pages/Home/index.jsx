import React from 'react';
import styles from './Home.module.css';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Button from '../../components/Button';

import homeImage from '../../assets/images/imagemHome.png';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Header />

            <section
                className={styles.homeSection}
                style={{ backgroundImage: `url(${homeImage})` }}
            >
                <div className={styles.homeOverlay}></div>
                <div className={styles.homeContent}>
                    <h1 className={styles.homeTitle}>
                        Conectando conhecimento a quem mais precisa.
                    </h1>
                    <p className={styles.homeSubtitle}>
                        Projeto que visa conectar voluntários com o Instituto Raízes.
                    </p>
                    <div className={styles.homeButtons}>
                        <Button className={styles.volunteerButton} onClick={() => console.log('Quero ser voluntário clicado')}>
                            Quero ser voluntário
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;