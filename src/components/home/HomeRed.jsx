import React from "react";
import bg from '../../assets/redback.png';
import Button from "../Reusable/button/Button";
import { Link } from "react-router-dom";


const HomeRed = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover bg-center py-10 px-4 "
    >
      <div className="flex justify-center items-start flex-col ml-2 py-3">
        <p className=" lg:-mt-8 items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] md:text-[30px] lg:text-[32px] pb-2">
          REDSHIFT
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3 min-w-[152px]  bg-primary"></span>
      </div>
      <div className="flex  justify-center items-center p-4">
        <div className="flex flex-wrap lg:flex-nowrap px-2 sm:px-4 justify-center items-center gap-10">
          <div data-aos="fade-right" data-aos-duration="2500">
            <p className="text-primary text-start font-bold text-[24px] lg:text-[28px] pb-6 pl-2">
              Redshift Revolution
            </p>
            <p className="text-black text-start text-16px] md:text-[20px] px-3">
              Redshift is a forward-thinking manufacturer of electric and hybrid
              vehicles, focused on introducing eco-friendly transportation
              alternatives to Ethiopia. Our team of passionate engineers,
              sustainability experts, and visionaries are committed to shaping a
              greener future.
            </p>
            <Link to="/about" className="justify-center items-center flex">
              <Button className="mt-10" title="Read more" type="button" />
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-duration="2500">
            <iframe
              width="956"
              height="538"
              src="https://www.youtube.com/embed/huSS2yM2J44"
              title="RedShift"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-screen lg:w-[600px] h-[450px] rounded-3xl px-3"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRed;
