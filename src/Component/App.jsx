import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Shop from './Shop'
import Signup from './Signup'
import SingleProductPage from './SingleProductPage'


import AdminHome from './Admin/AdminHome'

import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminMaincategory from './Admin/AdminMaincategory'






export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop/:maincat/' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/single-product/:id' element={<SingleProductPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
         

          <Route path='/admin-home' element={<AdminHome/>} />
          <Route path='/admin-maincategory' element={<AdminMaincategory/>} />
          <Route path='/admin-add-maincategory' element={<AdminAddMaincategory/>} />
          <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
