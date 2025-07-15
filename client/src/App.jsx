import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
// ...existing code...

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        // ...existing code...
        <Route path="/Models/E07" element={<h1>Model E 07 Page</h1>} />
        <Route path="/Models/S07" element={<h1>Model S 07 Page</h1>} />
        <Route path="/Models/L07" element={<h1>Model L 07 Page</h1>} />
        <Route path="/Models/Lumin" element={<h1>Model Lumin Page</h1>} />
        <Route path="/services" element={<h1>Why Choose Us Page</h1>} />
        <Route path="/agent" element={<h1>Spent to an Agent Page</h1>} />
        <Route path="/test-drive" element={<h1>Book a Test Drive Page</h1>} />
      </Routes>
    </>
  )
}

export default App