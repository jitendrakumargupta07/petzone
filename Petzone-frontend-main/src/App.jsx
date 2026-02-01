import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import Addpet from './pages/Addpet'
import Adoptpet from './pages/Adoptpet'

import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Protectedroutes from './components/Protectedroutes.jsx' 
const App = () => {
  
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signin' element={<Signin/>} />
    <Route path='/Addpet' element={
      <Protectedroutes >
        <Addpet/>
        </Protectedroutes>} />
    <Route path="Adoptpet" element={
      <Protectedroutes>
        <Adoptpet/>
        </Protectedroutes>
      } />

    <Route path='/Dashboard' element={
      <Protectedroutes>
      <Dashboard/>
      </Protectedroutes>
      } />
    <Route path="*" element={<Notfound/>} />
  </Routes>
  </BrowserRouter>

  )
}

export default App
