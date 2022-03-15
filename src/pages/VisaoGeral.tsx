import { Header } from "../components/Header";
import { Body } from "../components/Body";

import { database } from '../services/firebase'
import { ref, query, orderByChild, onValue, child } from "@firebase/database";

import './VisaoGeral.css'
import { useEffect, useState } from "react";

export function VisaoGeral() {
  const [data, setData] = useState([]);
  const [amountOpen, setAmountOpen] = useState(Number);
  const [amountTotal, setAmountTotal] = useState(Number);

  useEffect(() => {
    const dbRef = ref(database, 'chamados');
    const Query = query(dbRef, orderByChild('dataCriacao'))

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

  }, [])

  return (
    <div>
      <Header amountTotal={amountTotal} amountOpen={amountOpen} />
      <Body object={data} />
    </div>
  )
}