import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import FoodpartnerRegister from './pages/FoodpartnerRegister'
import FoodpartnerLogin from './pages/FoodpartnerLogin'
function App() {
  return (
    <>

    <Routes>
      <Route path='/user/register' element={<UserRegister></UserRegister>}></Route>
      <Route path='/user/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/foodpartner/register' element={<FoodpartnerRegister></FoodpartnerRegister>}></Route>
      <Route path='/foodpartner/login' element={<FoodpartnerLogin></FoodpartnerLogin>}></Route>

    </Routes>
    
      
    </>
  )
}

export default App
