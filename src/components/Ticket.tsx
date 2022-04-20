import { useEffect, useState } from 'react';
import { TicketButtons } from './TicketButtons'

import './Ticket.css'

type TicketProps = {
  id: string,
  userCreator: string,
  description: string,
  creationDate: string,
  status: boolean,
  sector: string
}

export function Ticket(props: TicketProps) {
  let date = new Date(props.creationDate);
  let dateFormatted = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  const [userLogado, setUserLogado] = useState(false);

  useEffect(() => {
    let userExists = localStorage.getItem('@user')?.length;
    if (userExists as number > 1) {
      setUserLogado(true)
    } else {
      setUserLogado(false)
    }
  }, [userLogado])

  return (
    <div>
      <div className="ticket">
        {props.status ? <span style={{ color: 'orange' }}>ABERTO</span> : <span style={{ color: 'green' }}>CONCLUÍDO</span>}
        <p>{dateFormatted}</p>
        <p>{props.sector}</p>
        <p><strong>{props.userCreator.toUpperCase()}</strong></p>
        <p>{props.description}</p>
      </div>
      {
        userLogado == true ?
          <TicketButtons
            id={props.id}
            status={props.status}
          />
          :
          ''
      }
    </div>
  )
}