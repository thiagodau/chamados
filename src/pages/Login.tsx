import { useState } from "react"

import { Link } from "react-router-dom";

import { FaUserCircle } from 'react-icons/fa'
import imageLoading from '../assets/loop.gif';

import './Login.css'

export function Login() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const userData = {
    user: 'thiagodau',
    pass: '123'
  };

  function login(usuario: string, password: string) {
    /** verify user */
    if (usuario == userData.user) {
      /** verify password */
      if (password == userData.pass) {
        document.getElementById('imageLoading')!.style.visibility = 'visible';
        localStorage.setItem('@user', usuario)
        window.location.replace('/dashboard')
      }

    } else {
      alert('Usuário ou senha incorretos.')
    }

  }

  return (
    <div className="login">
      <div className="login-form">
        <h1><FaUserCircle /></h1>
        <input placeholder="Usuário" type="text" onChange={(e) => { setUsuario(e.target.value) }} />
        <input placeholder="Senha" type="text" onChange={(e) => { setPassword(e.target.value) }} />

        <button onClick={() => { login(usuario, password) }}>LOGIN</button>
        <img id="imageLoading" src={imageLoading} width="70px" alt="Loading..." />
        <div>
          <Link to={'/'} style={{ color: '#ccc', fontSize: 'small', textDecoration: 'none' }}>Voltar</Link>
        </div>
      </div>
    </div>
  )
}