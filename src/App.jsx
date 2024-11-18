import { useState } from 'react'

import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx'
import Contact from './components/pages/Contact.jsx'
import About from './components/pages/About.jsx'
import Header from './components/Header.jsx'
import Sortiment from './components/pages/Sortiment.jsx'
import Product from './components/pages/Product.jsx'
import { Route, Routes } from "react-router-dom"
import CartTab from './components/pages/CartTab.jsx'


function App() {
 
  const [page, setPage] = useState('home')
  
  function switchPages(newPage) {
    return () => {
      setPage(newPage)
    }
  }
  
  return (
    <div className='text-base'>
        {page === 'home' ? <Home page={page} setPage={setPage} switchPages={switchPages}></Home> : null}
        {page === 'services' ? <Services page={page} setPage={setPage} switchPages={switchPages}></Services> : null}
        {page === 'contact' ? <Contact page={page} setPage={setPage} switchPages={switchPages}></Contact> : null}
        {page === 'about' ? <About page={page} setPage={setPage} switchPages={switchPages}></About> : null}
        <Routes>
          <Route path='/' element={<Sortiment></Sortiment>}></Route>
          <Route path='/:slug' element={<Product></Product>}></Route>
        </Routes> 
        <CartTab></CartTab>
    </div>
  )
}

export default App
