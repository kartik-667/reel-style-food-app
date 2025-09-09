import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import FoodpartnerRegister from './pages/FoodpartnerRegister'
import FoodpartnerLogin from './pages/FoodpartnerLogin'
import Home from './pages/Home'
import CreateFoodpage from './pages/CreateFoodpage'
import FoodPartnerProfile from './pages/FoodPartnerProfile'
function App() {
  return (
    <>

    <Routes>
      <Route path='/user/register' element={<UserRegister></UserRegister>}></Route>
      <Route path='/user/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/foodpartner/register' element={<FoodpartnerRegister></FoodpartnerRegister>}></Route>
      <Route path='/foodpartner/login' element={<FoodpartnerLogin></FoodpartnerLogin>}></Route>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/createfood" element={<CreateFoodpage></CreateFoodpage>
      }></Route>

      <Route path="/foodpartner/:id" element={<FoodPartnerProfile></FoodPartnerProfile>}></Route>

    </Routes>
    
      
    </>
  )
}

export default App
