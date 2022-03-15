import { TicketButtons } from './TicketButtons'

import './Ticket.css'

type TicketProps = {
  id: string,
  nome: string,
  descricao: string,
  dataCriacao: string,
  status: boolean
}

export function Ticket(props: TicketProps) {
  let date = new Date(props.dataCriacao);
  let dateFormatted = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div>
      <div className="ticket">
        {props.status ? <span style={{ color: 'orange' }}>ABERTO</span> : <span style={{ color: 'green' }}>CONCLUÍDO</span>}
        <p>{dateFormatted}</p>
        <p><strong>{props.nome}</strong></p>
        <p>{props.descricao}</p>
      </div>
      <TicketButtons
        id={props.id}
        nome={props.nome}
        descricao={props.descricao}
        dataCriacao={props.dataCriacao}
        status={props.status}
      />
    </div>
  )
}