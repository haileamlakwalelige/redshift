import React, { useState } from "react";
import Wave from "react-wavify";
import theme from "../../assets/toku.png";
import { Link } from "react-router-dom";
import Button from "../Reusable/button/Button";

const ServiceCard = () => {
  const [hoverStates, setHoverStates] = useState([]);

  const data = [
    {
      id: 1,
      title: "Hybrid Vehicle Manufacturing",
      text: "As a forward-thinking manufacturer, Redshift is at the forefront of producing eco-friendly electric and hybrid vehicles. Our state-of-the-art manufacturing plant, operational since 2018, is dedicated to crafting tricycles and other modern mobility solutions with a focus on sustainability.",
    },
    {
      id: 2,
      title: "Construction Expertise and Solutions",
      text: "Redshift Corp brings over seven years of experience in delivering high-quality construction projects, including roads, buildings, and railway infrastructure. Our expertise ensures that every construction endeavor meets the highest standards of quality and excellence.",
    },
    {
      id: 3,
      title: "Strategic Consultancy Services",
      text: "Redshift Corp offers strategic consultancy services, leveraging our extensive experience across various sectors. Whether you're planning a construction project or entering the electric vehicle market, our expert consultants provide tailored guidance for successful implementation.",
    },
    {
      id: 4,
      title: "Pioneering Green Mobility Solutions",
      text: "Redshift is committed to driving Ethiopia's green mobility revolution through our electric and hybrid tricycle models. Equipped with advanced features, our vehicles represent a sustainable and environmentally friendly transportation option, contributing to a cleaner future.",
    },
    {
      id: 5,
      title: "Innovative Project Development Support",
      text: "Redshift partners with clients on innovative projects, including restaurants and startup hubs, providing comprehensive support from concept to execution. We specialize in turning ideas into reality, combining creativity with practical implementation for successful project development.",
    },
    {
      id: 6,
      title: "Global Reach and Strategic Partnerships",
      text: "With a global presence spanning Africa, the Middle East, Southeast Asia, and South America, Redshift operates through an extensive network of outlets and strategic partnerships. Our wide reach ensures the successful distribution and adoption of our products and services worldwide.",
    },
  ];

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${theme})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="mt-16"
    >
      <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
        <p className="  items-end font-extrabold vie text-secondary text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] pb-2">
          REDSHIFT SERVICES
        </p>
        <span className="h-[3px] -mt-1 lg:-mt-2 ml-3 lg:ml-12 xl:ml-16 min-w-[112px] lg:min-2-[350px]  text-end bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 px-2 sm:px-4 md:px-8 lg:px-16 mx-2 sm:mx-4 md:mx-16">
        {data.map((item, index) => (
          <div className="carousel-item w-full card" key={item.id}>
            {item.title && item.text && (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="section bg-white max-w-[310px] min-h-[410px]  md:min-h-[416px] lg:min-h-[400px] rounded-xl border-[1px] z-20 overflow-y-hidden shadow-xl"
              >
                <p className="text-primary text-center line-clamp-2 my-6 px-2 inter border-b-[2px] border-primary font-bold text-[16px] md:text-[18px] lg:text-[20px] py-5">
                  {item.title}
                </p>
                <p className="text-black line-clamp-6 mb-10 text-center text-[14px] py-5 px-4 inter">
                  {item.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/service-detail" className="flex justify-center items-center">
        <Button type="button" title="Read More" />
      </Link>
    </div>
  );
};

export default ServiceCard;
