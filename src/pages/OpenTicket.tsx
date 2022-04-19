import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ref, push } from "firebase/database";
import { database } from '../services/firebase'

import './OpenTicket.css'

import imageLoading from '../assets/loop.gif'

export function OpenTicket() {
  const options = [
    'Selecione a Secretaria',
    'Secretaria de Obras',
    'Secretaria de Educação',
    'Secretaria de Saúde',
    'Assistencia Social'
  ];
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (name != '') {
      document.getElementById('inputName')!.style.border = "3px solid #15c39a"
    } else {
      document.getElementById('inputName')!.style.border = "1px solid #ccc"
    }

    if (description != '') {
      document.getElementById('inputDescription')!.style.border = "3px solid #15c39a"
    } else {
      document.getElementById('inputDescription')!.style.border = "1px solid #ccc"
    }

    if (sector != '') {
      document.getElementById('inputSector')!.style.border = "3px solid #15c39a"
    } else {
      document.getElementById('inputSector')!.style.border = "1px solid #ccc"
    }
  }, [name, description, sector]);

  let navigate = useNavigate();

  /** Open Ticket */
  function openedTicket(name: string, description: string, sector: string) {
    if (sector == 'Selecione a Secretaria' || sector == '') {
      alert('Por favor, selecione a Secretaria')
      document.getElementById('inputSector')!.style.border = "1px solid #c11549"

    } else if (name == '') {
      alert('Por favor, informe seu nome.')
      document.getElementById('inputName')!.style.border = "1px solid #c11549"

    } else if (description == '') {
      alert('Por favor, informe o problema.')
      document.getElementById('inputDescription')!.style.border = "1px solid #c11549"

    } else if (description.trim() == '') {
      alert('Por favor, o campo de descrição não pode ter apenas espaços em branco, informe o problema.')
      document.getElementById('inputDescription')!.style.border = "1px solid #c11549"

    } else {
      /** Set data on Firebase Realtime Database */
      const creationDate = Date();
      const status = true; /* true to open, false to closed */

      document.getElementById('buttonSend')!.style.display = 'none';
      document.getElementById('buttonCancel')!.style.display = 'none';
      document.getElementById('loading')!.style.visibility = 'visible';

      /** send data to databse */
      push(ref(database, 'tickets'), { name, description, sector, creationDate, status }).then(
        () => {
          navigate('/')
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

      <select id="inputSector" value={sector} onChange={(e) => setSector(e.target.value)}>
        {options.map((item, key) =>
          <option key={key} value={item}>{item}</option>
        )}
      </select>

      <input
        id="inputName"
        type="text"
        placeholder="Informe nome"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        id="inputDescription"
        placeholder="Informe o problema"
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id="buttonSend" onClick={() => { openedTicket(name, description, sector.toString()) }}>ABRIR CHAMADO</button>
      <span id="loading"><img src={imageLoading} alt="Loading..." /></span>
      <div id="buttonCancel">
        <Link to="/">Cancelar</Link>
      </div>
    </div>
  )
}