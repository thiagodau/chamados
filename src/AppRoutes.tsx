import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { VisaoGeral } from './pages/VisaoGeral'
import { OpenTicket } from './pages/OpenTicket'
import { AddAuthor } from './pages/AddAuthor'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
        <Route path='/abrirchamado' element={<OpenTicket />} />
        <Route path='/adicionartecnico' element={<AddAuthor />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}