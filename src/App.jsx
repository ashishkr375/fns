
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import History from './Component/History/History'
import Committes from './Component/Committes/Committes'
import Speaker from './Component/Speaker/Speaker'
import Contact from './Component/Contact/Contact'
import Abstract from './Component/Abstracts/Abstracts'
import Registration from './Component/Registration/Registration'
import Newupdate from './Component/Newupdate/Newupdate'
import Schedule from './Component/Schedule/Schedule'
import Publication from './Component/Publication/Publication'
import Travel from './Component/Travel/Travel'

// import Sponsor from './Component/Sponsor/Sponsor'


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History/>} />
          <Route path='/committees' element={<Committes />} />
          <Route path='/speaker' element={<Speaker />} />
          <Route path='/abstract' element={<Abstract />} />
          <Route path='/newupdate' element={<Newupdate />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/publication' element={<Publication/>}/>
          <Route path='/travel' element={<Travel/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact' element={<Contact />} />
          
          {/* <Route path='/sponsor' element={<Sponsor />} /> */}

        </Routes>
        <Footer/>
        
      </Router>
    
      
    </>
  )
}

export default App
