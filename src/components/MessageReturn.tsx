import { useEffect, useState } from "react"

import './MessageReturn.css'

type MessageReturnProps = {
  messageResult: boolean,
  closeFunction: Function | any;
}

export function MessageReturn(props: MessageReturnProps) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed === true) {
      props.closeFunction(false)
    }
  })
  return (
    <div id="message" className="message-return">
      {
        props.messageResult ? <p>'Adicionado com sucesso.'
          <button
            onClick={() => {
              setClosed(true)
            }}>X</button></p> : ''
      }

    </div>
  )
}