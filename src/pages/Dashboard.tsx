import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AddAuthor } from '../components/AddAuthor'
import { Reports } from '../components/Reports'
import { Profile } from '../pages/Profile'

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
      <div className='dashboard-menu'>

        <div style={{ marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
          <h2>Olá, {userLogado}.</h2>
          <button onClick={() => { localStorage.removeItem('@user'), localStorage.removeItem('@idUser'), setUserLogado('') }}>Sair.</button>
        </div>
        <div style={{ marginBottom: '20px', width: '100%', display: 'block' }}>
          <div>
            <ul>
              <li>
                <button><Link to={'/'} >Visão Geral</Link></button>
              </li>
              <li>
                <button onClick={() => { setRenderPage('reports') }}>Relatórios</button>
              </li>
              <li>
                <button onClick={() => { setRenderPage('addAuthor') }}>Adicionar Técnico</button>
              </li>
              <li>
                <button onClick={() => { setRenderPage('profile') }}>Perfil</button>
              </li>
            </ul>
          </div>
        </div>
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
        {
          renderPage == 'profile' ?
            <Profile />
            :
            ''
        }
      </div>
    </div>
  )
}