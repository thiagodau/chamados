type HeaderButtonsProps = {
  text: string,
  amount: number
}

export function HeaderButtons(props: HeaderButtonsProps) {
  return (
    <p style={{
      width: '250px',
      maxWidth: '500px', backgroundColor: '#009ABE', margin: '10px', padding: '20px 20px', textAlign: 'center'
    }}> {props.text}: {props.amount}</p >
  )
}