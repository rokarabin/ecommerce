import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'

                         
const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:id' element={<ProductDetails/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='payment' element={<Payment/>}/>
        

             






        </Route>


    </Routes>
    
    
    
    
    
    </BrowserRouter>
    
    </>
  )
}

export default MyRoutes