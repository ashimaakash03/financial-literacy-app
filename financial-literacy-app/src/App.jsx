import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Lessons from './pages/Lessons'
import Challenges from './pages/Challenges'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  )
}

export default App
