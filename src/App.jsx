import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../src/Pages/Home/Home.jsx'
import ContactForm from '../src/Pages/ContactForm/ContactForm.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactform' element={<ContactForm />} />
      </Routes>
    </div>
  )
}

export default App

