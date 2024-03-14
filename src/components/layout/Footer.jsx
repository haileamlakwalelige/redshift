import React from 'react'
import logo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";
import t from "../../assets/t.png";
import g from "../../assets/g.png";
import l from "../../assets/l.png";
import te from "../../assets/te.png";

const Footer = () => {
  return (
    <div className="footer -mt-10">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-16 justify-center items-start py-20 min-h-[60vh]">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-footer font-semibold text-[18px] md:text-[19px] lg:text-[20px] pb-1 text-center">
                  Condition and agreement
                </p>
                <p className="text-footer text-center pt-2">
                  Privacy & Security Commitment
                </p>
                <p className="text-footer text-center pt-2">
                  Customer Support Excellence
                </p>
                <p className="text-footer text-center pt-2">Stay Connected</p>
                <div className="mt-6">
                  <img src={logo} alt="" className="w-[269px] h-[175]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-footer font-semibold text-[18px] md:text-[19px] lg:text-[20px] pb-1 text-center">
                  Subscribe to Our Newsletter!
                </p>
                <form className="flex justify-center items-center flex-col px-10">
                  <div className="flex flex-col justify-center items-start gap-2 pt-6">
                    <label className="text-footer">Name</label>
                    <input
                      type="text"
                      className="min-w-[300px] lg:min-w-[350px]  h-[37px] pl-3 bg-footer rounded-xl outline-none focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2 pt-6">
                    <label className="text-footer">Email</label>
                    <input
                      type="email"
                      className="min-w-[300px] lg:min-w-[350px]  h-[37px] pl-3 bg-footer rounded-xl outline-none focus:outline-none"
                    />
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="text-footer bg-primary px-10 py-3 text-[16px] md:text-[18px] "
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-footer font-semibold text-[18px] md:text-[19px] lg:text-[20px] pb-1 text-center">
                Quick link
              </p>
              <Link to="/about">
                <p className="text-footer text-center pt-2">About Us</p>
              </Link>
              <Link to="/service">
                <p className="text-footer text-center pt-2">Service</p>
              </Link>
              <Link to="/gallery">
                <p className="text-footer text-center pt-2">Gallery</p>
              </Link>
            </div>
          </div>

          <div className="flex  gap-6 md:gap-12 lg:gap-16 pb-10">
            <img src={g} alt="" className="h-[40px] w-[40px]" />
            <img src={te} alt="" className="h-[40px] w-[40px]" />
            <img src={l} alt="" className="h-[40px] w-[40px]" />
            <img src={t} alt="" className="h-[40px] w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer