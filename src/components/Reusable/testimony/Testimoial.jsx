import React from "react";
import test from "../../../assets/test.png";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Testimoial = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-center bg-cover bg-no-repeat"
      data-aos-duration="2500"
      data-aos="slide-up"
    >
      <div className="flex justify-center items-start flex-col ml-2 py-4 md:pb-0 md:py-16 lg:py-10 mb-3">
        <p className="  items-end font-extrabold text-secondary text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] pb-2 ">
          TESTIMONIES
        </p>
        <span className="h-[3px] -mt-1 lg:-mt-2 ml-3 lg:ml-12 xl:ml-16 min-w-[112px] lg:min-2-[350px]  text-end bg-primary"></span>
      </div>
      <div className="flex justify-center items-center min-w-screen lg:-mt-6">
        <div className="flex flex-wrap justify-center items-center max-w-screen p-4 space-x-10 space-y-10  rounded-box px-10 min-w-screen w-full">
          <div className="carousel-item max-w-[300px] min-h-96 flex flex-col text-center justify-center items-center test px-2 md:px-4 lg:px-6">
            <BsPersonCircle className="text-[#002060] h-[50px] w-[50px]" />
            <p className="text-secondary font-bold text-[16px] md:text-[20px] lg:text-[24px]">
              Danait K.
            </p>
            <p className="py-2 text-secondary font-bold md:font-semibold text-[14px] md:text-[18px] lg:text-[22px]">
              Nairobi, Kenya
            </p>
            <p className="text-start text-black text-[14px]">
              As an agent for Redshift, I've seen the positive response from
              customers firsthand. The crowd funding model is inclusive and
              allows people from all walks of life to be part of the green
              mobility movement. Redshift's commitment to quality and
              sustainability makes it a brand I'm proud to represent.
            </p>
          </div>
          <div className="carousel-item max-w-[300px] min-h-96 flex flex-col text-center justify-center items-center test px-2 md:px-4 lg:px-6">
            <BsPersonCircle className="text-[#002060] h-[50px] w-[50px]" />
            <p className="text-secondary font-bold text-[16px] md:text-[20px] lg:text-[24px]">
              Liyana M.
            </p>
            <p className="py-2 text-secondary font-bold md:font-semibold text-[14px] md:text-[18px] lg:text-[22px]">
              Kigali, Rwanda
            </p>
            <p className="text-start text-black text-[14px]">
              I recently started using Redshift's electric cab service, and I am
              impressed with the commitment to sustainability. The E-Cab is
              comfortable, and the eco-friendly approach aligns with my values.
              Redshift is making a positive impact, not just on transportation
              but also on the environment.
            </p>
          </div>
          <div className="carousel-item max-w-[300px] min-h-96 flex flex-col text-center justify-center items-center test px-2 md:px-4 lg:px-6">
            <BsPersonCircle className="text-[#002060] h-[50px] w-[50px]" />
            <p className="text-secondary font-bold text-[16px] md:text-[20px] lg:text-[24px]">
              Abebe T.
            </p>
            <p className="py-2 text-secondary font-bold md:font-semibold text-[14px] md:text-[18px] lg:text-[22px]">
              Addis Ababa, Ethiopia
            </p>
            <p className="text-start text-black text-[14px]">
              Redshift has revolutionized my daily commute. The electric
              tricycle I purchased is not only environmentally friendly but also
              cost-effective. The sleek design and modern features make it a joy
              to drive. I'm proud to be part of the Redshift community
              contributing to a greener Ethiopia.
            </p>
          </div>
        </div>
      </div>
      <Link to="/about" className="justify-center items-center flex">
        <Button type="button" title="Read More" />
      </Link>
    </div>
  );
};

export default Testimoial;
