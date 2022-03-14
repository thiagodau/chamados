type TicketProps = {
  id: string,
  nome: string,
  descricao: string,
  dataCriacao: string,
  status: string
}

export function Ticket(props: TicketProps) {
  return (
    <div style={{ backgroundColor: 'yellow', margin: '2px', width: '250px', height: '250px' }}>
      <p>{props.status ? 'ABERTO' : 'CONCLUIDO'}</p>
      <p>{props.id}</p>
      <p>{props.nome}</p>
      <p>{props.descricao}</p>
      <p>{props.dataCriacao}</p>
    </div>
  )
}