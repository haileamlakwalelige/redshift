import React, { useState } from "react";
import "./Testimonial.css"; // Styles for Testimonial component
import test from "../../../assets/test.png";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { BsPersonCircle } from "react-icons/bs";




const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = ({ testimonial, isSelected, onSelect }) => {
  return (
    <div
      className={`testimonial -mt-[400px] lg:-mt-44 ${
        isSelected ? "selected" : "mt-10"
      }`}
      onClick={() => onSelect(testimonial.id)}
    >
      <BsPersonCircle className={`${isSelected ? "h-[70px] w-[70px]" : "mt-10 h-[30px] w-[30px]"}`}/>
      <h3>{testimonial.name}</h3>
      <p>{testimonial.text}</p>
    </div>
  );
};

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0].id
  );

  const handleTestimonialSelect = (id) => {
    setSelectedTestimonial(id);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-start flex-col ml-2 pt-20 pb-32 md:pb-0 md:py-20 lg:py-10 mb-3">
        <p className="  items-end font-extrabold vie text-secondary text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] pb-2 ">
          TESTIMONIES
        </p>
        <span className="h-[3px] -mt-1 lg:-mt-2 ml-3 lg:ml-12 xl:ml-16 min-w-[112px] lg:min-2-[350px]  text-end bg-primary"></span>
      </div>
      <div className="testimonial-section z-0 h-full min-h-screen overflow-y-hidden -mt-44">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
            isSelected={selectedTestimonial === testimonial.id}
            onSelect={handleTestimonialSelect}
          />
        ))}
      </div>
      <Link to="/about" className="justify-center items-center flex">
        <Button type="button" title="Read More" />
      </Link>
    </div>
  );
};

export default TestimonialSection;
