import { Ticket } from "./Ticket"

export function Body() {
  return (
    <div style={{ backgroundColor: 'green', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
      <Ticket text={'Ticket 1'} />
    </div>
  )
}