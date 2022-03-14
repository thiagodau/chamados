import { Ticket } from "./Ticket"

type BodyProps = {
  object: Object
}

export function Body(props: BodyProps) {
  return (
    <div style={{ backgroundColor: 'green', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      {
        props.object.map((item: any, key: any) => {
          return (
            <div key={key}>
              <Ticket
                id={item.key}
                nome={item.nome}
                descricao={item.descricao}
                dataCriacao={item.dataCriacao}
                status={item.status} />
            </div>
          )
        })
      }
    </div>
  )
}