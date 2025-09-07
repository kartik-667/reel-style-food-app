import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <h1 className='text-4xl text-black font-bold'>hey wassup dude </h1>

    <Routes>
      <Route path='/user/register' element={<h1>this is user register</h1>}></Route>
      <Route path='/user/login' element={<h1>this is user login</h1>}></Route>
      <Route path='/foodpartner/register' element={<h1>this is food partner register</h1>}></Route>
      <Route path='/foodpartner/login' element={<h1>this is food partner login</h1>}></Route>

    </Routes>
    
      
    </>
  )
}

export default App
