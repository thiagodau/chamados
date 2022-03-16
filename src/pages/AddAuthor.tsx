import { useState } from "react"

import { push, ref } from "firebase/database";
import { database } from "../services/firebase";

export function AddAuthor() {

  const [nameAuthor, setNameAuthor] = useState('');
  const [password, setPassword] = useState('');

  function addAuthor(name: string, password: string) {
    name == '' ?
      alert('Obrigatório nome para adicionar tecnico')
      :
      /** send data to databse */
      push(ref(database, 'authors'), { name, password }).then(
        () => {
          alert('Adicionado.')
        }
      ).catch(error => {
        alert('Aconteceu algo de errado, consulte o console do navegador.')
        console.log(error)
      })
  }

  return (
    <div>
      Técnico:
      <input type="text" name="author" id="author" onChange={(e) => { setNameAuthor(e.target.value) }} />
      <br />
      Senha:
      <input type="text" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
      <br />
      <button onClick={() => { addAuthor(nameAuthor, password) }}>Adicionar Técnico</button>
    </div>
  )
}