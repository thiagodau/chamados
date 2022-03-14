type HeaderButtonsProps = {
  text: string,
  amount: number
}

export function HeaderButtons(props: HeaderButtonsProps) {
  return (
    <p style={{ margin: '10px' }}>{props.text}: {props.amount}</p>
  )
}