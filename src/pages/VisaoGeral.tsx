import { Header } from "../components/Header";
import { Body } from "../components/Body";

import { db } from '../services/firebase'
import { ref, query, orderByChild, onValue, child } from "@firebase/database";

import './VisaoGeral.css'
import { useEffect, useState } from "react";

export function VisaoGeral() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, 'chamados');
    const Query = query(dbRef, orderByChild('dataCriacao'))

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

  }, [])

  return (
    <div className="aplication">
      <Header amountTotal={0} amountOpen={0} />
      <Body object={data} />
    </div>
  )
}