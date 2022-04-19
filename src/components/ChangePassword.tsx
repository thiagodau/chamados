import { child, onValue, query, ref, set } from "firebase/database";
import { useState } from "react"
import { database } from "../services/firebase";

import './ChangePassword.css'

export function ChangePassword() {
  const idUser = localStorage.getItem('@idUser');

  const dbRef = ref(database, 'users/' + idUser);
  const Query = query(dbRef);

  const [passwordOld, setPasswordOld] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  let user = {} as any;

  function changePassword(passwordOld: string, newPassword: string, confirmationPassword: string) {
    if (verifyPasswordOld(passwordOld)) {
      if (newPassword === confirmationPassword) {
        user.password = newPassword;
        set(ref(database, 'users/' + idUser), { user }).then(
          () => {
            alert('Sua senha foi alterada, você será deslogado. Para entrar novamente utilize sua nova senha.')
            localStorage.removeItem('@user')
            localStorage.removeItem('@idUser')
            window.location.replace('/login')
          }
        ).catch((error) => {
          console.log(error)
        })
      } else {
        alert('A nova senha não confirma, tente novamente.')
      }

    } else {
      alert('A senha que deseja mudar não esta correta.')
    }
  }

  const verifyPasswordOld = (passwordOld: string) => {
    let result = null;

    onValue(Query, (snapshot) => {
      snapshot.forEach((child) => {
        let values = child.val()
        if (values.password === passwordOld) {
          user = values
          result = true;
          return result;
        } else {
          result = false;
        }
      })
    })

    return result;
  }

  return (
    <div className='change-password'>
      <p>Alterar senha</p>
      <input type="password" placeholder='Anterior' onChange={(e) => { setPasswordOld(e.target.value) }} />
      <br />
      <input type="password" placeholder='Nova Senha' onChange={(e) => { setNewPassword(e.target.value) }} />
      <br />
      <input type="password" placeholder='Confirme a Nova Senha' onChange={(e) => { setConfirmationPassword(e.target.value) }} />
      <br />
      <button onClick={() => { changePassword(passwordOld, newPassword, confirmationPassword) }}>Alterar</button>
    </div>
  )
}