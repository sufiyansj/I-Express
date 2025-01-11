import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import News from './News'
import Contact from './Contact'

function App() {
  const [showContact, setShowContact] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
