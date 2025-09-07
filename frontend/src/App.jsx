import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
function App() {
  return (
    <>

    <Routes>
      <Route path='/user/register' element={<UserRegister></UserRegister>}></Route>
      <Route path='/user/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/foodpartner/register' element={<h1>this is food partner register</h1>}></Route>
      <Route path='/foodpartner/login' element={<h1>this is food partner login</h1>}></Route>

    </Routes>
    
      
    </>
  )
}

export default App
