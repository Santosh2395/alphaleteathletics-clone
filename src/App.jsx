import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/About";
import Services from "./pages/Privacy";
import Contact from "./pages/Contact";
import HeroSection from "./components/hero-section/HeroSection";
import Footer from "./components/footer/Footer";
import LoginForm from "./pages/Login";
import SignUp from "./pages/SignUp";
import WomenStore from "./components/women-store/womenstore";
import MenStore from "./components/mens-store/MensStore";
import Help from "./components/help/Help";
import WomenProductList, {
  MenProductList,
} from "./components/products/ProductList";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/About";
import PrivacyPolicy from "./pages/Privacy";
import Cart from "./pages/Cart";
import ProductDetails from "./components/product-details/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/women-store" element={<WomenStore />} />
        <Route path="/men-store" element={<MenStore />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/women-products" element={<WomenProductList />} />
        <Route path="/men-products" element={<MenProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
