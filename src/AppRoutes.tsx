import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { VisaoGeral } from './pages/VisaoGeral'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VisaoGeral />} />
      </Routes>
    </Router>
  )
}