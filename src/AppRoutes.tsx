import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { VisaoGeral } from './pages/VisaoGeral'
import { OpenTicket } from './pages/OpenTicket'
import { Dashboard } from './pages/Dashboard'
import { CreateUser } from './pages/CreateUser'
import { Login } from './pages/Login'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
        <Route path='/abrirchamado' element={<OpenTicket />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createUser' element={<CreateUser />} />
      </Routes>
    </Router>
  )
}