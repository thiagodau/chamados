import { useEffect, useState } from 'react'

import { AddAuthor } from '../components/AddAuthor'

import './Dashboard.css'

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
        <button>Relatórios</button> |
        <button onClick={() => { setRenderPage('addAuthor') }}>Adicionar Técnico</button> |
      </div>

      <div className='dashboard-body'>
        {
          renderPage == 'addAuthor' ?
            <AddAuthor />
            :
            ''
        }
      </div>
    </div>
  )
}