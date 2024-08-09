
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Sidebar from './Component/Sidebar/Sidebar'
import History from './Component/History/History'
import Committes from './Component/Committes/Committes'
import Callfor from './Component/CallFor/Callfor'
import Contact from './Component/Contact/Contact'
import Camera from './Component/Camera/Camera'
import Registration from './Component/Registration/Registration'
import Progamme from './Component/Progamme/Progamme'
import Accepted from './Component/Accepted/Accepted'


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History/>} />
          <Route path='/committees' element={<Committes />} />
          <Route path='/callfor' element={<Callfor />} />
          <Route path='/cameraready' element={<Camera />} />
          <Route path='/programme' element={<Progamme />} />
          <Route path='/acceptedpaper' element={<Accepted />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <Footer/>
        
      </Router>
    
      
    </>
  )
}

export default App
