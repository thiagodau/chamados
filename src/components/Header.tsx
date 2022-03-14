import { HeaderButtons } from './HeaderButtons'

type HeaderProps = {
  amountTotal: number,
  amountOpen: number
}

export function Header(props: HeaderProps) {
  return (
    <div style={{ backgroundColor: 'red', display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'center', justifyItems: 'center' }}>
      <h1>Sistema de Gestão de Chamados</h1>
      <div style={{ backgroundColor: 'blue', display: 'flex', flexWrap: 'wrap' }}>
        <HeaderButtons text='Total de Chamados' amount={props.amountTotal} />
        <HeaderButtons text='Chamados em Aberto' amount={props.amountOpen} />
      </div>
    </div>
  )
}