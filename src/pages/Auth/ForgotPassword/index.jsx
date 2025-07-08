import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Forgot.module.css';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = (e) => {
        e.preventDefault();
        console.log('Solicitação de recuperação de senha para:', email);
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