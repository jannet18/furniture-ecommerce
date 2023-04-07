import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/UI/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import AllProducts from "./admin/AllProducts";
import AddProducts from "./admin/AddProducts";
import AdminNav from "./admin/AdminNav";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
        {location?.path?.startsWith("/dashboard") ? <AdminNav /> : <Header />}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/all-products" element={<AllProducts />} />
            <Route path="/dashboard/add-products" element={<AddProducts />} />
          </Route>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
