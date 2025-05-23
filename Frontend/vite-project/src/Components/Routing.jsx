import React from 'react'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home/Home'
import Shop from './Shop/shop'
import ShowProduct from './Shop/ShowProduct'
import AddProduct from '../AdminComponents/AddProduct'
import Header from './Header'
import Footer from './Footer'


const Routing = () => {
  return (
    <>
     
      <BrowserRouter>
      <Routes>
      {/* ADMIN ROUTS */}
      <Route path="/admin/add-products" element={<AddProduct />} />
      {/* ADMIN ROUTS */}



        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/show-product' element={<ShowProduct/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  )
}

export default Routing
