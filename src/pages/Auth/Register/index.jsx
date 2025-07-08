import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { MdEmail, MdLock } from 'react-icons/md'; // Ícones para email e senha
import { FaUser } from 'react-icons/fa'; // Ícone para usuário (opcional, se quiser adicionar nome)

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Register attempt with:', { email, password, confirmPassword });
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        // Lógica de registro aqui
        alert('Cadastro realizado com sucesso (simulação)!');
    };

    return (
        <div className={styles.registerPage}>
            <div className={styles.registerCard}>
                <h2 className={styles.title}>Cadastre-se</h2>
                <form onSubmit={handleRegister} className={styles.registerForm}>
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
                    <div className={styles.inputWrapper}>
                        <MdLock className={styles.inputIcon} />
                        <Input
                            type="password"
                            placeholder="Insira sua senha..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <MdLock className={styles.inputIcon} />
                        <Input
                            type="password"
                            placeholder="Confirme sua senha..."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>

                    <Button type="submit" className={styles.createAccountButton}>
                        Criar Conta
                    </Button>
                </form>
                <div className={styles.divider}></div>
                <p className={styles.loginPrompt}>
                    Já tenho uma conta? <Link to="/login" className={styles.loginLink}>Entrar</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;