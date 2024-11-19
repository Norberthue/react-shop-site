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
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import { AnimatePresence } from 'framer-motion';

function App() {
  const [page, setPage] = useState('home')
  const location = useLocation()
  function switchPages(newPage) {
    return () => {
      setPage(newPage)
    }
  }
  
  return (
    <AnimatePresence mode='wait'>
    <motion.div className='text-base'
    initial={{opacity: 0, y: 20 }}
    animate={{opacity: 1, y:0 }}
    exit={{opacity: 0, y: -20}}
    transition={{duration: 1 ,ease: "easeInOut"}}
    >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home page={page} setPage={setPage} switchPages={switchPages}></Home>}></Route>
            <Route path='/services' element={<Services page={page} setPage={setPage} switchPages={switchPages}></Services>}></Route>
            <Route path='/contact' element={<Contact page={page} setPage={setPage} switchPages={switchPages}></Contact>}></Route>
            <Route path='/about' element={<About page={page} setPage={setPage} switchPages={switchPages}></About>}></Route>
            <Route path='/:slug'  element={<Product page={page} setPage={setPage} switchPages={switchPages}></Product>}></Route>
            <Route path='/services/:slug'  element={<Product page={page} setPage={setPage} switchPages={switchPages}></Product>}></Route>
            <Route path='/contact/:slug'  element={<Product page={page} setPage={setPage} switchPages={switchPages}></Product>}></Route>
            <Route path='/about/:slug'  element={<Product page={page} setPage={setPage} switchPages={switchPages}></Product>}></Route>
          </Routes> 
        <CartTab></CartTab>
    </motion.div>
    </AnimatePresence>
  )
}

export default App
