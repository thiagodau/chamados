type TicketProps = {
  text?: string
}

export function Ticket(props: TicketProps) {
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      {props.text}
    </div>
  )
}