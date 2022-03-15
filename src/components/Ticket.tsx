import { TicketButtons } from './TicketButtons'

import './Ticket.css'

type TicketProps = {
  id: string,
  name: string,
  description: string,
  creationDate: string,
  status: boolean,
  sector: string
}

export function Ticket(props: TicketProps) {
  let date = new Date(props.creationDate);
  let dateFormatted = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div>
      <div className="ticket">
        {props.status ? <span style={{ color: 'orange' }}>ABERTO</span> : <span style={{ color: 'green' }}>CONCLUÍDO</span>}
        <p>{dateFormatted}</p>
        <p>{props.sector}</p>
        <p><strong>{props.name}</strong></p>
        <p>{props.description}</p>
      </div>
      <TicketButtons
        id={props.id}
        name={props.name}
        description={props.description}
        creationDate={props.creationDate}
        status={props.status}
        sector={props.sector}
      />
    </div>
  )
}