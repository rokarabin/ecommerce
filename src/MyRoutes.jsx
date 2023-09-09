import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import Registration from "./pages/Registration";

const MyRoutes = () => {
  let isLoggedIn = useSelector((store) => store.authStore.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        {!isLoggedIn ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Registration />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
