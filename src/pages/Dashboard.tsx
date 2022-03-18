import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AddAuthor } from '../components/AddAuthor'
import { Reports } from '../components/Reports'

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
        <Link to={'/'} >Visão Geral</Link> |
        <button onClick={() => { setRenderPage('addAuthor') }}>Adicionar Técnico</button> |
        <button onClick={() => { setRenderPage('reports') }}>Relatórios</button> |
      </div>

      <div className='dashboard-body'>
        {
          renderPage == 'addAuthor' ?
            <AddAuthor />
            :
            ''
        }
        {
          renderPage == 'reports' ?
            <Reports />
            :
            ''
        }
      </div>
    </div>
  )
}