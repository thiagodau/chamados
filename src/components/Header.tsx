import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { HeaderButtons } from './HeaderButtons'

import logoPrefeitura from '../assets/logo-aquidauana.png'

import './Header.css'

type HeaderProps = {
  amountTotal: number,
  amountOpen: number,
  query: string
  querySelected: Function
}

export function Header(props: HeaderProps) {

  const [state, setState] = useState(props.query);

  useEffect(() => {
    props.querySelected(state)
  }, [state])

  const userLogged = () => {
    let logged = localStorage.getItem('@user')?.length as any
    logged > 0 ? logged = true : logged = false
    return logged;
  }

  return (
    <div className='header'>
      <img src={logoPrefeitura} alt="Prefeitura de Aquidauana" width={'120px'} />

      <h1>Sistema de Gestão de Chamados</h1>
      {
        localStorage.getItem('@user')?.length as any > 1 ?
          <Link to={'/dashboard'} style={{ color: '#ccc' }}>Oi {localStorage.getItem('@user')}, acesse o Dashboard aqui.
          </Link>
          :
          'Para criar um chamado, faça o login ou crie uma conta.'
      }
      <div className='header-content'>
        <HeaderButtons text='Total de Chamados' amount={props.amountTotal} />
        <HeaderButtons text='Chamados em Aberto' amount={props.amountOpen} />
        {
          userLogged() === true ?
            <div style={{
              width: '250px',
              maxWidth: '500px',
              backgroundColor: '#ED9B09',
              margin: '10px',
              padding: '20px 20px',
              textAlign: 'center',
            }}>
              <Link style={{ color: '#fff', textDecoration: 'none' }} to={'/abrirchamado'}>Abrir Chamado</Link>
            </div>
            :
            <div style={{
              width: '250px',
              maxWidth: '500px',
              backgroundColor: '#ED9B09',
              margin: '10px',
              padding: '20px 20px',
              textAlign: 'center',
            }}>
              <div>
                <Link to={'/login'} style={{ color: '#fff' }}>Login</Link>
                &nbsp;ou&nbsp;
                <Link to={'/createUser'} style={{ color: '#fff' }}>Criar conta</Link>
              </div>
            </div>
        }

      </div>

      <div className='header-content'>
        <p>Ordenar por:</p>
        <input checked={state === 'status'} type="radio" value="status" name="gender" onChange={(e) => { setState(e.target.value) }} /> Status
        <input checked={state === 'creationDate'} type="radio" value="creationDate" name="gender" onChange={(e) => { setState(e.target.value) }} /> Data de Criação
        <input checked={state === 'sector'} type="radio" value="sector" name="gender" onChange={(e) => { setState(e.target.value) }} /> Setor
      </div>
    </div>
  )
}