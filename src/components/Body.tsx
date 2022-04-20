import { Ticket } from "./Ticket"

type BodyProps = {
  object: Object[]
}

export function Body(props: BodyProps) {
  return (
    <div style={{ margin: '10px', padding: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {
        props.object.map((item: any, key: any) => {
          return (
            <div key={key}>
              <Ticket
                id={item.key}
                userCreator={item.userCreator}
                description={item.description}
                creationDate={item.creationDate}
                status={item.status}
                sector={item.sector}
              />
            </div>
          )
        })
      }
    </div>
  )
}