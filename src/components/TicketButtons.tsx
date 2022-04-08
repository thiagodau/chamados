import { set, ref } from 'firebase/database';
import { database } from '../services/firebase'

import { FaBan, FaDoorClosed, FaDoorOpen, FaWpforms } from 'react-icons/fa';

import './TicketButtons.css'

type TicketButtonsProps = {
  id: string,
  name: string,
  description: string,
  creationDate: string,
  status: boolean,
  sector: string
}

export function TicketButtons(props: TicketButtonsProps) {
  /** Delete Ticket */
  function deletedTicket(key: string) {
    let result = confirm('Tem certeza que deseja excluir esse chamado?')
    if (result == true) {
      set(ref(database, 'tickets/' + key), null)
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
  function closedTicket(key: string, name: string, description: string, creationDate: string, status: boolean, sector: string) {
    if (status === true) {
      let result = confirm('Tem certeza que quer concluir esse chamado ?')
      if (result == true) {
        set(ref(database, 'tickets/' + key), {
          name: name,
          description: description,
          creationDate: creationDate,
          status: false,
          sector: sector
        })
      }
    }
  }

  /** Reopen Ticket */
  function reopenTicket(key: string, name: string, description: string, creationDate: string, status: boolean, sector: string) {
    if (status === false) {
      let result = confirm('Tem certeza que quer reabrir esse chamado ?')
      if (result == true) {
        set(ref(database, 'tickets/' + key), {
          name: name,
          description: description,
          creationDate: creationDate,
          status: true,
          sector: sector
        })
      }
    }
  }

  return (
    <div className="ticketsbuttons">
      <button onClick={() => { deletedTicket(props.id) }}><FaBan color={'#EA4147'} /></button>
      <button onClick={() => { alert('oie') }}><FaWpforms color={'#FFF'} /></button>
      {
        props.status ?
          <button onClick={() => { closedTicket(props.id, props.name, props.description, props.creationDate, props.status, props.sector) }}><FaDoorOpen color={'#ED9B09'} /></button>
          :
          <button onClick={() => { reopenTicket(props.id, props.name, props.description, props.creationDate, props.status, props.sector) }}><FaDoorClosed color={'#56B35A'} /></button>
      }
    </div>
  )
}