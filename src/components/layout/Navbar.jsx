import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="fixed w-screen top-0 -mt-2 py-2   bg-[#fff] z-50">
      <nav className="navbar py-2 sticky top-0  lg:bg-white z-50">
        <Link
          to="/"
          className=" flex items-start lg:items-end lg:bg-white   justify-start lg:justify-end "
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt=""
            className="h-20 md:mt-3 -mt-10 lg:mt-0 w-24 ml-6 md:ml-20  lg:mr-20 navbar-logo"
          />
        </Link>
        <div className="menu-icon lg:text-black  mt-3" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={
            click
              ? "nav-menu active lg:gap-10  -mr-20 overflow-x-hidden flex  justify-center items-center lg:bg-[#fff]"
              : "nav-menu lg:gap-10 -mr-20 overflow-x-hidden  flex justify-center font-normal items-center"
          }
        >
          <li className="nav-item">
            <Link
              to="/"
              className=" py-2 px-3 md:p-0  hover:text-primary lg:text-black   flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove "
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/service"
              className=" py-2 px-3 md:p-0 hover:text-primary lg:text-black   flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove "
              onClick={closeMobileMenu}
            >
              Service
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/about"
              className=" py-2 px-3 md:p-0 hover:text-primary lg:text-black   flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove "
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/products"
              className=" py-2 px-3 md:p-0 hover:text-primary lg:text-black   flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove "
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className=" py-2 px-3 md:p-0 hover:text-primary lg:text-black   flex justify-center items-center offer lg:text-xl md:bg-transparent text-center hove "
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item lg:mr-44 xl:mr-0">
            <Link
              to="/contact"
              className="nav-links but -mt-10 md:mt-0   hover:rounded-3xl lg:bg-primary duration-300  font-normal"
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

export default Navbar;
