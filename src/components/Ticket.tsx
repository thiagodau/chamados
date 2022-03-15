import { TicketButtons } from './TicketButtons'

type TicketProps = {
  id: string,
  nome: string,
  descricao: string,
  dataCriacao: string,
  status: boolean
}

export function Ticket(props: TicketProps) {
  return (
    <div style={{ backgroundColor: 'yellow', margin: '2px', width: '250px', height: '250px', textAlign: 'center' }}>
      <p>{props.status ? 'ABERTO' : 'CONCLUIDO'}</p>
      <p>{props.id}</p>
      <p>{props.nome}</p>
      <p>{props.descricao}</p>
      <p>{props.dataCriacao}</p>

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