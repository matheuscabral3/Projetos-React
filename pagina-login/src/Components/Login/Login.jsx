import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import '../Login/Login.css'


const Login = () => {
    // Iniciando com as variáveis vazias.
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nome: ' + userName + ' / Password: ' + userPassword);
        alert("Login Efetuado com sucesso.");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className='input-field'>
                    <input type="text" placeholder='E-mail' onChange={(e) => setUserName(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='Senha' onChange={(e) => setUserPassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar-se</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login
