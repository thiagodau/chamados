import { useState } from "react";
import { Link } from "react-router-dom";

import { ref, push } from "firebase/database";
import { database } from '../services/firebase'

import './OpenTicket.css'
import { useEffect } from "react";

export function OpenTicket() {
  const options = [
    'Selecione a Secretaria',
    'Secretaria de Obras',
    'Secretaria de Educação',
    'Secretaria de Saúde',
    'Assistencia Social'
  ];
  const [sector, setSector] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  /** Open Ticket */
  function openedTicket(name: string, description: string, sector: string) {
    if (sector == 'Selecione a Secretaria' || sector == '') {
      alert('Por favor, selecione a Secretaria')
    } else if (name == '') {
      alert('Por favor, informe seu nome.')
    } else if (description == '') {
      alert('Por favor, informe o problema.')
    } else if (description.trim() == '') {
      alert('Por favor, o campo de descrição não pode ter apenas espaços em branco, informe o problema.')
    } else {
      /** Set data on Firebase Realtime Database */
      const creationDate = Date();
      const status = true; /* true to open, false to closed */

      /** send data to databse */
      push(ref(database, 'tickets'), { name, description, sector, creationDate, status }).then(
        () => {
          window.location.replace('/')
        }
      ).catch(error => {
        alert('Aconteceu algo de errado, consulte o console do navegador.')
        console.log(error)
      })

    }
  }

  return (
    <div className="form">
      <h1>ABERTURA DE CHAMADO</h1>

      <select value={sector} onChange={(e) => setSector(e.target.value)}>
        {options.map((item, key) =>
          <option key={key} value={item}>{item}</option>
        )}
      </select>

      <input
        type="text"
        placeholder="Informe nome"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Informe o problema"
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => { openedTicket(name, description, sector.toString()) }}>ABRIR CHAMADO</button>

      <div>
        <Link to="/">Cancelar</Link>
      </div>
    </div>
  )
}