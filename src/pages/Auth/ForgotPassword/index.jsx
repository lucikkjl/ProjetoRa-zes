import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Forgot.module.css'; // Importa o CSS Module
import { MdEmail } from 'react-icons/md'; // Ícone para email
import { IoIosArrowBack } from 'react-icons/io'; // Ícone de seta para voltar (React Icons)

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = (e) => {
        e.preventDefault();
        console.log('Solicitação de recuperação de senha para:', email);
        // Lógica para enviar email com o código de recuperação
        alert('Se o email estiver cadastrado, um link de recuperação foi enviado.');
    };

    return (
        <div className={styles.forgotPage}>
            <div className={styles.forgotCard}>
                <h2 className={styles.title}>Esqueceu a senha?</h2>
                <p className={styles.description}>
                    Insira seu email para receber o código de recuperação.
                </p>
                <form onSubmit={handlePasswordRecovery} className={styles.forgotForm}>
                    <div className={styles.inputWrapper}>
                        <MdEmail className={styles.inputIcon} />
                        <Input
                            type="email"
                            placeholder="Insira seu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>
                    {/* O segundo input na imagem não é padrão para este fluxo, então manteremos apenas um. */}
                    {/* <div className={styles.inputWrapper}>
                        <MdEmail className={styles.inputIcon} />
                        <Input
                            type="email"
                            placeholder="Confirmar email..."
                            value={email} // Ou um novo state para confirmação
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.customInput}
                        />
                    </div> */}

                    <Button type="submit" className={styles.recoverButton}>
                        Recuperar senha
                    </Button>
                </form>
                <Link to="/login" className={styles.backToLogin}>
                    <IoIosArrowBack className={styles.backIcon} /> Voltar para o login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;