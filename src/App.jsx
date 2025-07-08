import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import ForgotPasswordPage from './pages/Auth/ForgotPassword';
import ResetPasswordPage from './pages/Auth/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/esqueci-a-senha" element={<ForgotPasswordPage />} />
        <Route path="/resetar-senha" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;