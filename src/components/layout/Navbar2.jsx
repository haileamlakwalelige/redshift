import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/footerlogo.png";

const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="fixed w-screen top-0 -mt-2 py-2 z-50 bg-primary">
      <nav className={`navbar py-2 sticky top-0 z-50 bg-primary`}>
        <Link
          to="/"
          className={` flex items-start lg:items-end  justify-start lg:justify-end `}
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt=""
            className="h-20 md:-mt-4 -mt-6 lg:mt-0 w-24 ml-6 md:ml-20  lg:mr-20 navbar-logo"
          />
        </Link>
        <div
          className="menu-icon lg:text-white text-white  mt-3"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={
            click
              ? "nav-menu active lg:gap-10  -mr-20 overflow-x-hidden flex  justify-center items-center"
              : "nav-menu lg:gap-10 -mr-20 overflow-x-hidden  flex justify-center font-normal items-center"
          }
        >
          <li className="nav-item">
            <Link
              to="/"
              className={`py-2 px-3 md:p-0 lg:hidden xl:flex  lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/service"
              className={`py-2 px-3 md:p-0    lg:text-white flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove`}
              onClick={closeMobileMenu}
            >
              Service
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/about"
              className={`py-2 px-3 md:p-0   lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove  `}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/products"
              className={`py-2 px-3 md:p-0    lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className={`py-2 px-3 md:p-0   lg:text-white  flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove `}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item lg:mr-44 xl:mr-0">
            <Link
              to="/contact"
              className={` nav-links but -mt-10 md:mt-0   hover:lg:rounded-3xl lg:bg-white text-primary duration-50  font-normal `}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
