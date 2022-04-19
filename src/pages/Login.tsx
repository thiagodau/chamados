import { useEffect, useState } from "react"

import { database } from "../services/firebase";
import { ref, query, onValue } from "firebase/database";

import { Link, useNavigate } from "react-router-dom";


import { FaUserCircle } from 'react-icons/fa'
import imageLoading from '../assets/loop.gif';

import './Login.css'

export function Login() {

  const [userData, setUserData] = useState([]) as any;
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const dbRef = ref(database, 'users');
    const Query = query(dbRef);
    onValue(Query, (snapshot) => {
      let allContent = [];
      let listOfUsers = [] as any;
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        allContent = childSnapshot.val();
        allContent.key = childKey;
        listOfUsers.push(allContent)
      })
      setUserData(listOfUsers)
    })

    if (shouldRedirect) {
      navigate('/dashboard');
    }

  }, [shouldRedirect])

  function login(usuario: string, password: string) {
    let result = false;
    let idUser = null;

    for (let i = 0; i < userData.length; i++) {
      if (usuario === userData[i].user.user && password === userData[i].user.password) {
        idUser = userData[i].key;
        result = true;
      }
    }

    if (result == true) {
      document.getElementById('message')!.style.visibility = "hidden"
      document.getElementById('imageLoading')!.style.visibility = 'visible';
      localStorage.setItem('@user', usuario);
      localStorage.setItem('@idUser', idUser);
      setShouldRedirect(true)
    } else {
      document.getElementById('message')!.style.visibility = "visible"
      document.getElementById('form')!.style.animation = "treme 0.1s"
      document.getElementById('form')!.style.animationIterationCount = "2"
      document.getElementById('form')!.style.animationDuration = "200ms"
    }
  }

  return (
    <div className="login">
      <div id="form" className="login-form">
        <h1><FaUserCircle /></h1>
        <input placeholder="Usuário" type="text" onChange={(e) => { setUsuario(e.target.value) }} />
        <input placeholder="Senha" type="password" onChange={(e) => { setPassword(e.target.value) }} />

        <button onClick={() => { login(usuario, password) }}>LOGIN</button>
        <p id="message">Usuário ou senha incorretos.</p>
        <img id="imageLoading" src={imageLoading} width="70px" alt="Loading..." />
        <div>
          <Link to={'/'} style={{ color: '#ccc', fontSize: 'small', textDecoration: 'none' }}>Voltar</Link>
        </div>
      </div>
    </div>
  )
}