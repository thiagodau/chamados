import { useState } from 'react'
import { AddAuthor } from './AddAuthor'
import './Dashboard.css'
import { OpenTicket } from './OpenTicket'

export function Dashboard() {
  const [renderPage, setRenderPage] = useState('')
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard-menu'>
        <button onClick={() => { setRenderPage('addTicket') }}>Relatórios</button> |
        <button onClick={() => { setRenderPage('addAuthor') }}>Adicionar Técnico</button> |
        <button onClick={() => { setRenderPage('addTicket') }}>Adicionar Chamado</button> |
      </div>

      <div className='dashboard-body'>
        {
          renderPage == 'addAuthor' ?
            <AddAuthor />
            :
            ''
        }

        {
          renderPage == 'addTicket' ?
            <OpenTicket />
            :
            ''
        }
      </div>
    </div>
  )
}