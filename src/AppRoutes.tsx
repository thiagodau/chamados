import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { VisaoGeral } from './pages/VisaoGeral'
import { OpenTicket } from './pages/OpenTicket'
import { AddAuthor } from './pages/AddAuthor'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
        <Route path='/abrirchamado' element={<OpenTicket />} />
        <Route path='/adicionartecnico' element={<AddAuthor />} />
      </Routes>
    </Router>
  )
}