import { HeaderButtons } from './HeaderButtons'

import { Link } from "react-router-dom";

type HeaderProps = {
  amountTotal: number,
  amountOpen: number
}

export function Header(props: HeaderProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'center', justifyItems: 'center', textAlign: 'center', color: '#fff' }}>
      <h1>Sistema de Gestão de Chamados</h1>
      <div style={{ color: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
    </div>
  )
}