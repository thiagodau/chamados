import { TicketButtons } from "./TicketButtons";

type ListData = {
  allData: Object[]
}

export function ListData(props: ListData) {

  return (
    <div>
      {
        props.allData.map((item: any, i: any) => {
          let date = new Date(item.creationDate);
          let dateFormatted = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
          return (
            <div className="group-list" key={i}>
              <ul>
                <li>{item.name}</li>
                <li>{item.description}</li>
                <li>{dateFormatted}</li>
                <li>{item.status ? 'ABERTO' : 'CONCLUIDO'}</li>
                <li>
                  <TicketButtons
                    id={item.key}
                    name={item.name}
                    description={item.description}
                    creationDate={item.creationDate}
                    status={item.status}
                    sector={item.sector}
                  />
                </li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}