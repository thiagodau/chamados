import { useState } from "react"

import { push, ref } from "firebase/database";
import { database } from "../services/firebase";

import imageLoading from '../assets/loop.gif'

import './AddAuthor.css'
import { MessageReturn } from "./MessageReturn";

export function AddAuthor() {

  const [nameAuthor, setNameAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [messageReturn, setMessageReturn] = useState(Boolean);

  function addAuthor(name: string, password: string, confirmPassword: string) {
    if (messageReturn == true) {
      setMessageReturn(false)
    }

    if (name == '') {
      alert('Obrigatório nome para adicionar tecnico')
    } else if (password != confirmPassword) {
      alert('As senhas não conferem.')
    } else {
      document.getElementById('imageLoading')!.style.visibility = 'visible';
      /** send data to databse */
      push(ref(database, 'authors'), { name, password }).then(
        () => {
          setMessageReturn(true)
          document.getElementById('imageLoading')!.style.visibility = 'hidden';
          setNameAuthor('')
          setPassword('')
          setConfirmPassword('')
        }
      ).catch(error => {
        alert('Aconteceu algo de errado, consulte o console do navegador.')
        console.log(error)
      })
    }
  }
  return (
    <div className="addAuthor">
      <h1>Adicionar Author</h1>
      <input placeholder="Informe o nome de usuário" type="text" name="author" id="author" onChange={(e) => { setNameAuthor(e.target.value) }} value={nameAuthor} />
      <input placeholder="Informe uma senha" type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
      <input placeholder="Confirme a senha" type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} />
      <button onClick={() => { addAuthor(nameAuthor, password, confirmPassword) }}>ADICIONAR</button>
      <img id="imageLoading" src={imageLoading} alt="Loading..." />

      {
        messageReturn == true ?
          <MessageReturn messageResult={messageReturn} closeFunction={setMessageReturn} />
          :
          ''
      }

    </div>
  )
}