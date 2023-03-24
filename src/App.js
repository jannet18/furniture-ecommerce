import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from'./pages/ProductDetails';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';




function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/shop:id" element={<ProductDetails/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
