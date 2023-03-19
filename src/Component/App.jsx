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

import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminSubcategory from './Admin/AdminSubcategory'


import AdminAddBrand from './Admin/AdminAddBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminBrand from './Admin/AdminBrand'
import AdminProduct from './Admin/AdminProduct'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'





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
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/single-product/:id' element={<SingleProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update-profile' element={<UpdateProfile />} />


          <Route path='/admin-home' element={<AdminHome />} />

          {/* admin maincategory */}
          <Route path='/admin-maincategory' element={<AdminMaincategory />} />
          <Route path='/admin-add-maincategory' element={<AdminAddMaincategory />} />
          <Route path='/admin-update-maincategory/:id' element={<AdminUpdateMaincategory />} />

          {/* admin subcategory */}
          <Route path='/admin-subcategory' element={<AdminSubcategory />} />
          <Route path='/admin-add-subcategory' element={<AdminAddSubcategory />} />
          <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory />} />

          {/* admin brand */}
          <Route path='/admin-brand' element={<AdminBrand />} />
          <Route path='/admin-add-brand' element={<AdminAddBrand />} />
          <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand />} />


          {/* admin product */}
          <Route path='/admin-product' element={<AdminProduct />} />
          <Route path='/admin-add-product' element={<AdminAddProduct />} />
          <Route path='/admin-update-product/:id' element={<AdminUpdateProduct/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
