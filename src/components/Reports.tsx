import { useState } from 'react';
import { database } from '../services/firebase'
import { ref, query, onValue } from "@firebase/database";

import { ListData } from './ListData';

import './Reports.css'

export function Reports() {

  const [data, setData] = useState([])

  const dbRef = ref(database, 'tickets');
  const Query = query(dbRef);

  function getAllData() {
    onValue(Query, (snapshot) => {
      let allContent = [];
      let listOfTickets = [] as any;

      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        allContent = childSnapshot.val();
        allContent.key = childKey;

        listOfTickets.push(allContent)
      })
      setData(listOfTickets)
    })
  }

  return (
    <div className="reports">
      <div className='reports-header'>
        <h1>Reports</h1>
        <button onClick={() => { getAllData() }}>Buscar todos</button>
      </div>
      <div className='reports-list'>
        <div className='group-list'>
          <ul style={{ fontSize: 'large', fontWeight: 'bolder' }}>
            <li>Nome</li>
            <li>Descrição</li>
            <li>Data Criação</li>
            <li>Status</li>
            <li>Ações</li>
          </ul>
        </div>

        <ListData allData={data} />

      </div >
    </div >
  )

}