import { HeaderButtons } from './HeaderButtons'

export function Header() {
  return (
    <div style={{ backgroundColor: 'red', width: '100%;', display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'center', justifyItems: 'center' }}>
      <h1>Sistema de Gestão de Chamados</h1>
      <div style={{ backgroundColor: 'blue', display: 'flex', flexWrap: 'wrap' }}>
        <HeaderButtons text='Quantidade Total de Chamados' amount={0} />
        <HeaderButtons text='Quantidade de Chamados em Aberto' amount={0} />
      </div>
    </div>
  )
}