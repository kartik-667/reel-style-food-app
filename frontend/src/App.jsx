import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import FoodpartnerRegister from './pages/FoodpartnerRegister'
import FoodpartnerLogin from './pages/FoodpartnerLogin'
import Home from './pages/Home'
import FoodPartnerProfile from './pages/FoodPartnerProfile'
import Createfood from './pages/Createfood'
import SavedPage from './pages/SavedPage'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    
    <Navbar></Navbar>
    

    <Routes>
      <Route path='/user/register' element={<UserRegister></UserRegister>}></Route>
      <Route path='/user/login' element={<UserLogin></UserLogin>}></Route>
      <Route path='/foodpartner/register' element={<FoodpartnerRegister></FoodpartnerRegister>}></Route>
      <Route path='/foodpartner/login' element={<FoodpartnerLogin></FoodpartnerLogin>}></Route>
      <Route path="/" element={<Home />} ></Route>
      

      <Route path="/foodpartner/:id" element={<FoodPartnerProfile></FoodPartnerProfile>}></Route>
      <Route path="/createfood" element={<Createfood></Createfood>} ></Route>
      <Route path="/:id/saved" element={<SavedPage />}></Route>

    </Routes>
    
      
    </>
  )
}

export default App
