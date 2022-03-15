import { HeaderButtons } from './HeaderButtons'

type HeaderProps = {
  amountTotal: number,
  amountOpen: number
}

export function Header(props: HeaderProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'center', justifyItems: 'center', color: '#fff' }}>
      <h1>Sistema de Gestão de Chamados</h1>
      <div style={{ color: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <HeaderButtons text='Total de Chamados' amount={props.amountTotal} />
        <HeaderButtons text='Chamados em Aberto' amount={props.amountOpen} />
      </div>
    </div>
  )
}