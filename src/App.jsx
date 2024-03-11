import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Four0Four from "./pages/Four0Four";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Service from "./pages/Service";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Copy from "./components/layout/Copy";
import Footer from "./components/layout/Footer";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="*" element={<Four0Four />} />
      </Routes>
      <Footer />
      <Copy />
    </div>
  );
};

export default App;
