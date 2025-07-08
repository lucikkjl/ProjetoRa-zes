import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Reset.module.css'; // Importa o CSS Module
import { MdEmail } from 'react-icons/md'; // Ícone para email/código
import { IoIosArrowBack } from 'react-icons/io'; // Ícone de seta para voltar

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const ResetPasswordPage = () => {
    const [code, setCode] = useState('');

    const handleCodeVerification = (e) => {
        e.preventDefault();
        console.log('Verifying code:', code);
        // Lógica para verificar o código
        alert('Código verificado! Redirecionando para a redefinição de senha (simulação).');
        // Em um cenário real, redirecionaria para uma página de "Definir Nova Senha"
    };

    return (
        <div className={styles.resetPage}>
            <div className={styles.resetCard}>
                <h2 className={styles.title}>Verifique sua caixa de entrada!</h2>
                <p className={styles.description}>
                    O código de redefinição foi enviado! Verifique sua caixa de entrada ou sua pasta de spam.
                </p>
                <form onSubmit={handleCodeVerification} className={styles.resetForm}>
                    <div className={styles.inputWrapper}>
                        <MdEmail className={styles.inputIcon} /> {/* Ícone de email para o campo de código */}
                        <Input
                            type="text" // Tipo texto para o código
                            placeholder="Digite seu código..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>
                    <Button type="submit" className={styles.sendButton}>
                        Enviar
                    </Button>
                </form>
                <Link to="/login" className={styles.backToLogin}>
                    <IoIosArrowBack className={styles.backIcon} /> Voltar para o login
                </Link>
            </div>
        </div>
    );
};

export default ResetPasswordPage;