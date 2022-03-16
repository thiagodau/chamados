import { HeaderButtons } from './HeaderButtons'

import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

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

  return (
    <div className='header'>
      <h1>Sistema de Gestão de Chamados</h1>
      <div className='header-content'>
        <HeaderButtons text='Total de Chamados' amount={props.amountTotal} />
        <HeaderButtons text='Chamados em Aberto' amount={props.amountOpen} />
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