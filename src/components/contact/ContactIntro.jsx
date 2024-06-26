import React from "react";
import Contact1 from "../Reusable/contact/Contact1";
import Contact2 from "../Reusable/contact/Contact2";
import Contact3 from "../Reusable/contact/Contact3";

const ContactIntro = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 lg:my-40">
      <p className="text-primary font-semibold text-[18px] lg:text-[24px] xl:text-[28px]  px-2 sm:px-4 md:px-8 lg:px-16 text-center pb-10">
        Thank you for your interest in Redshift! We value your inquiries and
        feedback. Here are various ways to get in touch with us
      </p>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[18px] lg:text-[20px]  px-2 pb-2">
          SOCIAL MEDIA{" "}
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3 lg:ml-6  min-w-[100px]  bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
        <Contact1 />
        <Contact2 />
        <Contact3 />
      </div>
    </div>
  );
};

export default ContactIntro;
