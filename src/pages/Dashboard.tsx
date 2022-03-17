import { useEffect, useState } from 'react'
import { AddAuthor } from './AddAuthor'
import './Dashboard.css'
import { OpenTicket } from './OpenTicket'

export function Dashboard() {
  const [renderPage, setRenderPage] = useState('')
  const [userLogado, setUserLogado] = useState('');

  useEffect(() => {
    if (localStorage.getItem('@user') == null) {
      window.location.replace('/')
    }

    let user = localStorage.getItem('@user')
    setUserLogado(user as string)
  }, [userLogado])

  return (
    <div className='dashboard'>
      <h2>Olá, {userLogado}.</h2>
      <button onClick={() => { localStorage.removeItem('@user'), setUserLogado('') }}>Sair.</button>
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