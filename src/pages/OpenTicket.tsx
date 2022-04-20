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
    'Assistencia Social',
    'Prefeitura'
  ];
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

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
  }, [description, sector]);

  let navigate = useNavigate();

  /** Open Ticket */
  function openedTicket(description: string, sector: string) {
    if (sector == 'Selecione a Secretaria' || sector == '') {
      alert('Por favor, selecione a Secretaria')
      document.getElementById('inputSector')!.style.border = "1px solid #c11549"

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

      let idUserCreator = localStorage.getItem('@idUser');
      let userCreator = localStorage.getItem('@user');
      /** send data to databse */
      push(ref(database, 'tickets'), { description, sector, creationDate, status, idUserCreator, userCreator }).then(
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

      <textarea
        id="inputDescription"
        placeholder="Informe o problema"
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id="buttonSend" onClick={() => { openedTicket(description, sector.toString()) }}>ABRIR CHAMADO</button>
      <span id="loading"><img src={imageLoading} alt="Loading..." /></span>
      <div id="buttonCancel">
        <Link to="/">Cancelar</Link>
      </div>
    </div>
  )
}