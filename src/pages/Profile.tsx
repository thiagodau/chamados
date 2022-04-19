import { useState } from "react"
import { ChangePassword } from "../components/ChangePassword"

import './Profile.css'

export function Profile() {

  return (
    <div className='profile'>
      <div>
        <h1>Perfil</h1>
      </div>
      <div>
        Olá, {localStorage.getItem('@user')}. 👋
      </div>
      <ChangePassword />
    </div>
  )
}