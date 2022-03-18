import { Header } from "../components/Header";
import { Body } from "../components/Body";

import { database } from '../services/firebase'
import { ref, query, orderByChild, onValue } from "@firebase/database";

import './VisaoGeral.css'

import imageLoading from '../assets/loop.gif'
import { FaGithub } from 'react-icons/fa';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function VisaoGeral() {
  const [data, setData] = useState([]);
  const [amountOpen, setAmountOpen] = useState(Number);
  const [amountTotal, setAmountTotal] = useState(Number);
  const [newQuery, setNewQuery] = useState('creationDate');

  useEffect(() => {
    const dbRef = ref(database, 'tickets');
    const Query = query(dbRef, orderByChild(newQuery))

    onValue(Query, (snapshot) => {
      let allContent = [];
      let listOfTickets = [] as any;
      let counter = 0;

      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        allContent = childSnapshot.val();
        allContent.key = childKey;

        listOfTickets.push(allContent)

        if (allContent.status === true) {
          counter++
        }
      })
      setAmountTotal(listOfTickets.length)
      setData(listOfTickets)
      setAmountOpen(counter)
    })

  }, [newQuery])

  return (
    <div>
      <Header amountTotal={amountTotal} amountOpen={amountOpen} querySelected={setNewQuery} query={newQuery} />
      {
        data.length == 0 ?
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <img src={imageLoading} alt="Processando" />
          </div>
          :
          <Body object={data} />
      }
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', fontSize: 'x-small', color: '#ccc' }}>
        <FaGithub color={'#ccc'} /> &nbsp; Desenvolvido por &nbsp; <a href="https://github.com/thiagodau/chamados" target="_blank" style={{ color: '#ccc' }}>Thiago Rodrigues</a>
        &nbsp;|&nbsp;

        {
          localStorage.getItem('@user')?.length as any > 1 ?
            localStorage.getItem('@user') + ' esta logado.'
            :
            <Link to={'/login'} style={{ color: '#ccc' }}>Login</Link>
        }

      </div>
    </div>
  )
}