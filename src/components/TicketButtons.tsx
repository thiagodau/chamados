import { getDatabase, set, ref } from "firebase/database";
import { database } from '../services/firebase'

type TicketButtonsProps = {
  id: string,
  nome: string,
  descricao: string,
  dataCriacao: string,
  status: boolean
}

export function TicketButtons(props: TicketButtonsProps) {
  /** Delete Ticket */
  function deletedTicket(key: string) {
    let result = confirm('Tem certeza que deseja excluir o chamado de id: ' + key)
    if (result == true) {
      set(ref(database, 'chamados/' + key), null)
        .then(() => {
          // Data saved successfully!
          console.log('Excluido!')
        })
        .catch((error) => {
          // The write failed...
          console.log(error)
        });
    }
  }

  /** Closed Ticket */
  function closedTicket(key: string, nome: string, descricao: string, dataCriacao: string, status: boolean) {
    console.log(status)
    if (status === true) {
      set(ref(database, 'chamados/' + key), {
        nome: nome,
        descricao: descricao,
        dataCriacao: dataCriacao,
        status: false
      })
    }
  }

  /** Reopen Ticket */
  function reopenTicket(key: string, nome: string, descricao: string, dataCriacao: string, status: boolean) {
    console.log(status)
    if (status === false) {
      set(ref(database, 'chamados/' + key), {
        nome: nome,
        descricao: descricao,
        dataCriacao: dataCriacao,
        status: true
      })
    }
  }

  return (
    <div>
      <button onClick={() => { deletedTicket(props.id) }}>excluir</button>
      {
        props.status ?
          <button onClick={() => { closedTicket(props.id, props.nome, props.descricao, props.dataCriacao, props.status) }}>concluir</button>
          :
          <button onClick={() => { reopenTicket(props.id, props.nome, props.descricao, props.dataCriacao, props.status) }}>reabrir</button>
      }
    </div>
  )
}