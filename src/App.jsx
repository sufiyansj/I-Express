import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import News from './News'
import Contact from './Contact'
import Home from './Home' 
function App() {
  return (
    <Router basename="/vite-react-deploy">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Re-add this line */}
        <Route path="/News" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;