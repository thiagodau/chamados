import { useState } from "react"

export function Login() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  function login(usuario: string, password: string) {
    alert(usuario + ' ' + password)
    localStorage.setItem('user', usuario)
  }

  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#ccc', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h1>Login</h1>
        <div>
          <p>Usuário:
            <input type="text" onChange={(e) => { setUsuario(e.target.value) }} />
          </p>

          <p>Senha:
            <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
          </p>

          <p>
            <button onClick={() => { login(usuario, password) }}>Acessar</button>
            <button>Voltar</button>
          </p>
        </div>
      </div>
    </div>
  )
}