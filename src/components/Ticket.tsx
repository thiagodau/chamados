type TicketProps = {
  id: string,
  nome: string,
  descricao: string,
  dataCriacao: string,
  status: string
}

export function Ticket(props: TicketProps) {
  return (
    <div style={{ backgroundColor: 'yellow', margin: '2px', width: '250px', height: '250px', textAlign: 'center' }}>
      <p>{props.status ? 'ABERTO' : 'CONCLUIDO'}</p>
      <p>{props.id}</p>
      <p>{props.nome}</p>
      <p>{props.descricao}</p>
      <p>{props.dataCriacao}</p>
      <div>
        <button onClick={() => { alert(props.id) }}>excluir</button>
        <button onClick={() => { alert(props.id) }}>reabrir</button>
        <button onClick={() => { alert(props.id) }}>concluir</button>
      </div>
    </div>
  )
}