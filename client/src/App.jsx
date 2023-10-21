import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import Profile from './pages/PagesPrivate/Profile'
import Products from './pages/Products'
import ProtectedRoute from './ProtectedRoute'
import HomeProducts from './pages/PagesPrivate/HomeProducts'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


          <Route element={<ProtectedRoute/>}>
            <Route path='/homeproducts' element={<HomeProducts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/products' element={<Products />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
