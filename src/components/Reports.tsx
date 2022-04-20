import { useState } from 'react';
import { database } from '../services/firebase'
import { ref, query, onValue } from "@firebase/database";

import { ListData } from './ListData';

import './Reports.css'

export function Reports() {

  const [data, setData] = useState([])
  const dbRef = ref(database, 'tickets');
  const Query = query(dbRef);

  function getTicketsByUser() {
    let _id = localStorage.getItem('@idUser');

    onValue(Query, (snapshot) => {
      let allContent = [];
      let listOfTickets = [] as any;

      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        allContent = childSnapshot.val();
        allContent.key = childKey;
        if (_id === allContent.idUserCreator) {
          listOfTickets.push(allContent)
        }
      })
      setData(listOfTickets)
    })

  }

  return (
    <div className="reports">
      <div className='reports-header'>
        <h1>Chamados</h1>
        <button onClick={() => { getTicketsByUser() }}>Meus Chamados</button>
      </div>
      <div className='reports-list'>
        {
          data.length > 0 ?
            <div className='group-list'>
              <ul style={{ fontSize: 'large', fontWeight: 'bolder' }}>
                <li>Nome</li>
                <li>Descrição</li>
                <li>Data Criação</li>
                <li>Status</li>
                <li>Ações</li>
              </ul>
              <ListData allData={data} />
            </div>
            :
            'Selecione uma opção.'
        }
      </div >
    </div >
  )

}