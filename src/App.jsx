
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
        <Footer/>
        
      </Router>
    
      
    </>
  )
}

export default App
