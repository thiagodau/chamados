import { set, ref } from 'firebase/database';
import { database } from '../services/firebase'

import { FaBan, FaDoorClosed, FaDoorOpen } from 'react-icons/fa';


import './TicketButtons.css'

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
    let result = confirm('Tem certeza que deseja excluir o chamado de ' + key)
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
    <div className="ticketsbuttons">
      <button onClick={() => { deletedTicket(props.id) }}><FaBan color={'#EA4147'} /></button>
      {
        props.status ?
          <button onClick={() => { closedTicket(props.id, props.nome, props.descricao, props.dataCriacao, props.status) }}><FaDoorOpen color={'#ED9B09'} /></button>
          :
          <button onClick={() => { reopenTicket(props.id, props.nome, props.descricao, props.dataCriacao, props.status) }}><FaDoorClosed color={'#56B35A'} /></button>
      }
    </div>
  )
}