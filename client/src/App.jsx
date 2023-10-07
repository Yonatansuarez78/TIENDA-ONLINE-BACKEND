import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>home page</h1>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
      {/* <Route path='/login' element={<h1>home page</h1>} />
      <Route path='/' element={<h1>home page</h1>} />
      <Route path='/login' element={<h1>home page</h1>} />
      <Route path='/' element={<h1>home page</h1>} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
