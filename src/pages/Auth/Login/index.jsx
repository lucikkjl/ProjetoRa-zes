import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { username, password });

        if (username && password) {
            alert('Login simulado bem-sucedido! Redirecionando para a Home.');
            navigate('/');
        } else {
            alert('Por favor, insira usuário e senha.');
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2 className={styles.title}>Entrar</h2>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <div className={styles.inputWrapper}>
                        <FaUserAlt className={styles.inputIcon} />
                        <Input
                            type="text"
                            placeholder="Insira seu email..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <FaLock className={styles.inputIcon} />
                        <Input
                            type="password"
                            placeholder="Insira sua senha..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.customInput}
                        />
                    </div>
                    <div className={styles.rememberMe}>
                        <input type="checkbox" id="remember" className={styles.rememberCheckbox} />
                        <label htmlFor="remember" className={styles.rememberLabel}>Lembre-se de mim</label>
                    </div>
                    <Button type="submit" className={styles.loginButton}>
                        Avançar <MdArrowForward className={styles.buttonIcon} />
                    </Button>
                </form>

                <div className={styles.passwordLinks}>
                    <Link to="/esqueci-a-senha" className={styles.forgotPassword}>
                        Esqueci a senha
                    </Link>
                    <span> | </span>
                    <Link to="/resetar-senha" className={styles.forgotPassword}>
                        Resetar senha
                    </Link>
                </div>

                <div className={styles.signupLink}>
                    Não tem conta? <Link to="/cadastro" className={styles.signupLinkText}>Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
