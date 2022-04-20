import { ChangePassword } from "../components/ChangePassword"

import './Profile.css'

export function Profile() {

  return (
    <div className='profile'>
      <div>
        <h1>Perfil</h1>
        Olá, {localStorage.getItem('@user')}. 👋
      </div>
      <div className="profile-body">
        <ChangePassword />
      </div>
    </div>
  )
}