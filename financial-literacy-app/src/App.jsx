import Dashboard from './pages/Dashboard'
import Lessons from './pages/Lessons'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>
    </Router>
  )
}

export default App
