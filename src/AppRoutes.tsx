import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { VisaoGeral } from './pages/VisaoGeral'
import { OpenTicket } from './pages/OpenTicket'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
        <Route path='/abrirchamado' element={<OpenTicket />} />
      </Routes>
    </Router>
  )
}