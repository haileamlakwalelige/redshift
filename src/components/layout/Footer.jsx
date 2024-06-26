import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footerlogo.png";
import t from "../../assets/t.png";
import g from "../../assets/g.png";
import l from "../../assets/l.png";
import te from "../../assets/te.png";
import footer from "../../assets/footers.png";
import { toast } from "react-toastify";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "http://dashboard.redshiftbusinessgroup.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Subscribed Successfully!");
        setFormData({
          name: "",
          email: "",
        });
      } else {
        toast.error("Failed to submit data!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("An error occurred while submitting data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="-mt-10 z-30"
    >
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
                  <img src={logo} alt="Logo" className="w-[269px] h-[175]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-footer font-semibold text-[18px] md:text-[19px] lg:text-[20px] pb-1 text-center">
                  Subscribe to Our Newsletter!
                </p>
                <form
                  className="flex justify-center items-center flex-col px-10"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col justify-center items-start gap-2 pt-6">
                    <label className="text-footer">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="min-w-[300px] lg:min-w-[350px] h-[37px] pl-3 bg-footer rounded-xl outline-none focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2 pt-6">
                    <label className="text-footer">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="min-w-[300px] lg:min-w-[350px] h-[37px] pl-3 bg-footer rounded-xl outline-none focus:outline-none"
                      disabled={loading}
                    />
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className={`text-footer imos bg-primary hover:bg-[#25224d] duration-500 hover:rounded-xl px-10 py-3 text-[16px] md:text-[18px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Subscribe'}
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
              <Link to="/service-detail#gallery">
                <p className="text-footer text-center pt-2">Gallery</p>
              </Link>
            </div>
          </div>

          <div className="flex gap-6 md:gap-12 lg:gap-16 pb-10">
            <img src={g} alt="Google" className="h-[40px] w-[40px]" />
            <img src={te} alt="Twitter" className="h-[40px] w-[40px]" />
            <img src={l} alt="LinkedIn" className="h-[40px] w-[40px]" />
            <img src={t} alt="Facebook" className="h-[40px] w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
