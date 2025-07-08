import React from "react";
import styles from "./Home.module.css";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Button from "../../components/Button";

import homeImage from "../../assets/images/imagemHome.png"; // Usando a imagem que já está lá
import ongImage from "../../assets/images/Ong.jpg";


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />

      {/* Seção Principal (Home Section) */}
      <section
        className={styles.homeSection}
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className={styles.homeOverlay}></div>{" "}
        {/* Camada de sobreposição para o gradiente */}
        <div className={styles.homeContent}>
          <h1 className={styles.homeTitle}>
            Conectando conhecimento a quem mais precisa.
          </h1>
          <p className={styles.homeSubtitle}>
            Projeto que visa conectar professores voluntários com a ONG Raízes.
          </p>
          <div className={styles.homeButtons}>
            <Button
              className={styles.volunteerButton}
              onClick={() => console.log("Quero ser voluntário clicado")}
            >
              Quero ser voluntário
            </Button>
            <Button
              className={styles.ongButton}
              onClick={() => console.log("Cadastrar ONG clicado")}
            >
              Cadastrar ONG
            </Button>
          </div>
        </div>
      </section>

      {/* Outras seções (mantidas do código anterior, estilização pode ser refinada depois) */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2>Saiba mais sobre a ONG</h2>
          <p>
            Texto sobre a ONG, sua missão e valores. Pode incluir cards com
            imagens e descrições, como na sua inspiração.
          </p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3>Instituto Raízes</h3>
              <p>Instituto Raízes</p>
              <img
                src={ongImage}
                alt="Instituto Raízes"
                className={styles.cardImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <div className={styles.howItWorksContent}>
          <h2>Como Funciona?</h2>
          <p>Breve descrição de como o processo funciona.</p>
          <div className={styles.stepsContainer}>
            <div className={styles.stepItem}>
              <img
                src="https://img.icons8.com/ios/100/000000/search--v1.png"
                alt="Ícone de busca"
                className={styles.stepIcon}
              />
              <h3>Diagnóstico</h3>
              <p>Descreva o passo de diagnóstico.</p>
            </div>
            <div className={styles.stepItem}>
              <img
                src="https://img.icons8.com/ios/100/000000/settings--v1.png"
                alt="Ícone de engrenagem"
                className={styles.stepIcon}
              />
              <h3>Inovação</h3>
              <p>Descreva o passo de inovação.</p>
            </div>
            <div className={styles.stepItem}>
              <img
                src="https://img.icons8.com/ios/100/000000/heart-health.png"
                alt="Ícone de coração"
                className={styles.stepIcon}
              />
              <h3>Apoio e parcerias</h3>
              <p>Descreva o passo de apoio e parcerias.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
