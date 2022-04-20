import { set, ref, update, remove } from 'firebase/database';
import { database } from '../services/firebase'

import { FaBan, FaDoorClosed, FaDoorOpen, FaWpforms } from 'react-icons/fa';

import './TicketButtons.css'

type TicketButtonsProps = {
  id: string,
  status: boolean,
}

export function TicketButtons(props: TicketButtonsProps) {
  /** Delete Ticket */
  async function deletedTicket(key: string) {
    let result = confirm('Tem certeza que deseja excluir esse chamado?')
    if (result == true) {
      await remove(ref(database, 'tickets/' + key))
    }
  }

  /** Closed and ReOpened Ticket */
  function changedStatusTicket(key: string, status: boolean) {
    let result = confirm('Tem certeza que quer concluir esse chamado ?')
    if (result) {
      status === true ?
        update(ref(database, 'tickets/' + key), { status: false })
        :
        update(ref(database, 'tickets/' + key), { status: true })
    }
  }

  return (
    <div className="ticketsbuttons">
      <button onClick={() => { deletedTicket(props.id) }}><FaBan color={'#EA4147'} /></button>
      <button onClick={() => { alert('função para imprimir um ticket.') }}><FaWpforms color={'#FFF'} /></button>
      {
        props.status ?
          <button onClick={() => { changedStatusTicket(props.id, props.status) }}><FaDoorOpen color={'#ED9B09'} /></button>
          :
          <button onClick={() => { changedStatusTicket(props.id, props.status) }}><FaDoorClosed color={'#56B35A'} /></button>
      }
    </div>
  )
}