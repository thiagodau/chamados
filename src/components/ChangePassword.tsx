import { useState } from "react"

import './ChangePassword.css'

export function ChangePassword() {

  return (
    <div className='change-password'>
      <p>Alterar senha</p>
      <input type="password" name="Anterior" placeholder='Anterior' />
      <br />
      <input type="password" name="Anterior" placeholder='Nova Senha' />
      <br />
      <input type="password" name="Anterior" placeholder='Confirme a Nova Senha' />
      <br />
      <button>Alterar</button>
    </div>
  )
}