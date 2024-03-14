import React from "react";

const ContactAddress = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 mt-5 min-h-screen">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[18px] lg:text-[20px]  px-2">
          ADDRESS
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[172px]  bg-primary"></span>
      </div>
      <div className="px-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7881.099208312843!2d38.791236!3d9.013524!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnNDguNyJOIDM4wrA0NycyOC41IkU!5e0!3m2!1sen!2set!4v1709903071697!5m2!1sen!2set"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[80vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactAddress;
