import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { push, ref, query, onValue } from 'firebase/database';
import { database } from '../services/firebase';

import { FaUserCircle } from 'react-icons/fa'

import loading from '../assets/loop.gif';

import './CreateUser.css'

export function CreateUser() {
  const options = [
    'Selecione a Secretaria',
    'Secretaria de Obras',
    'Secretaria de Educação',
    'Secretaria de Saúde',
    'Assistencia Social',
    'Prefeitura'
  ];

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sector, setSector] = useState('');

  let navigate = useNavigate();

  function validationInputs(usuario: string, password: string, confirmPassword: string, sector: string) {
    let objectUser = {
      user: '',
      password: '',
      sector: '',
      userTypes: 'public'
    }

    if (usuario && password && confirmPassword && sector) {
      if (usuario.includes(' ') || password.includes(' ') || usuario == '' || password == '') {
        alert('Usuário e/ou Senha não podem conter espaços em branco, verifique.')
        animation()
      } else if (password === confirmPassword) {
        if (sector == 'Selecione a Secretaria') {
          alert('Selecione uma secretaria vinculada a você.')
          animation()
        } else {
          if (verifyUserExist(usuario)) {
            alert(usuario + ' esse usuário já existe, tente outro.')
            animation()
          } else {
            objectUser.user = usuario;
            objectUser.password = password;
            objectUser.sector = sector;

            creationUser(objectUser);
            document.getElementById('loading')!.style.visibility = 'visible';

            objectUser.user = '';
            objectUser.password = '';
            objectUser.sector = '';
          }

        }
      } else {
        alert('As senhas não conferem, verifique.')
        animation()
      }
    } else {
      alert('Não pode haver campos vazios.')
      animation()
    }
  }

  function creationUser(user: Object) {
    /** send data to databse **/
    push(ref(database, 'users'), { user }).then(
      () => {
        alert('PARABÉNS, Seu usuário foi criado, você será redirecionado para tela de login.')
        navigate('/login')
      }
    ).catch(error => {
      alert('Aconteceu algo de errado, consulte o console do navegador.')
      console.log(error)
    })
  }

  const verifyUserExist = (user: string) => {
    const dbRef = ref(database, 'users');
    const Query = query(dbRef)
    let result = null;

    onValue(Query, (snapshot) => {
      snapshot.forEach((child) => {
        let values = child.val()

        if (values.user.user === user) {
          result = true;
          animationLoading();
          return result;
        } else {
          result = false;
        }
      })
    })

    return result;
  }

  const animation = () => {
    document.getElementById('form')!.style.animation = "treme 0.1s"
    document.getElementById('form')!.style.animationIterationCount = "2"
    document.getElementById('form')!.style.animationDuration = "200ms"
    setTimeout(function () {
      document.getElementById('form')!.style.animation = "none"
    }, 500)
  }

  const animationLoading = () => {
    document.getElementById('loading')!.style.visibility = 'hidden';
  }

  return (
    <div>
      <div className="create">
        <div id="form" className="create-form">
          <h1><FaUserCircle /></h1>
          <input placeholder="Usuário" type="text" onChange={(e) => { setUsuario(e.target.value) }} />
          <input placeholder="Senha" type="password" onChange={(e) => { setPassword(e.target.value) }} />
          <input placeholder="Confirmação da senha" type="password" onChange={(e) => { setConfirmPassword(e.target.value) }} />

          <select id="inputSector" value={sector} onChange={(e) => setSector(e.target.value)}>
            {options.map((item, key) =>
              <option key={key} value={item}>{item}</option>
            )}
          </select>

          <button onClick={() => { validationInputs(usuario, password, confirmPassword, sector) }}>CRIAR</button>
          <img id="loading" src={loading} width="70px" alt="Loading..." />
          <div>
            <Link to={'/'} style={{ color: '#ccc', fontSize: 'small', textDecoration: 'none' }}>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}