import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Four0Four from "./pages/Four0Four";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Service from "./pages/Service";
import About from "./pages/About";
// import Navbar1 from "./components/layout/Navbar1"; 
// import Navbar2 from "./components/layout/Navbar2"; 
import Copy from "./components/layout/Copy";
import Footer from "./components/layout/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ProductFour from "./pages/ProductFour";
import BlogDetail from "./pages/BlogDetail";
import Cars from "./components/layout/Cars";
import ScrollToTop from "./ScrollToTop";
import Navbar2 from "./components/layout/Navbar2";
import Navbar1 from "./components/layout/Navbar1";

const App = () => {
  const location = useLocation();

  // Function to determine if the current route should use Navbar2
  const useNavbar2 = () => {
    const { pathname } = location;
    return (
      pathname === "/products" ||
      pathname === "/producttwo" ||
      pathname === "/service-detail" ||
      pathname === "/contact"
    );
  };

  return (
    <div>
      {/* Render Navbar2 for specific routes */}
      {useNavbar2() ? <Navbar2 /> : <Navbar1 />}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/producttwo" element={<ProductFour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="*" element={<Four0Four />} />
      </Routes>
      <Cars />
      <Footer />
      <Copy />
    </div>
  );
};

export default App;
