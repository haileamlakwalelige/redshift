import React from "react";
import faq from "../../assets/faq.png";
import { GoDotFill } from "react-icons/go";

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="  items-end max-w-[100px] font-extrabold vie text-secondary text-[30px] md:text-[35px] lg:text-[40px]">
          FAQ
        </p>
        <span class="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-10 min-w-[80px]  bg-primary"></span>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-wrap">
          <div>
            <img src={faq} alt="" />
          </div>
          <div className="lg:col-span-2">
            <div className="collapse collapse-plus bg-base-200 rounded-none my-3">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="text-white"
              />
              <div className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light">
                <GoDotFill className="mt-1" />
                Click to open this one and close others
              </div>
              <div className="collapse-content text-start">
                <div className="bg-base-200">
                  As an agent for Redshift, I've seen the positive response from
                  customers firsthand. The crowd funding model is inclusive and
                  allows people from all walks of life to be part of the green
                  mobility movement. Redshift's commitment to quality and
                  sustainability makes it a brand I'm proud to represent.
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 rounded-none my-3">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="text-white"
              />
              <div className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light">
                <GoDotFill className="mt-1" />
                Click to open this one and close others
              </div>
              <div className="collapse-content text-start">
                <div className="bg-base-200">
                  As an agent for Redshift, I've seen the positive response from
                  customers firsthand. The crowd funding model is inclusive and
                  allows people from all walks of life to be part of the green
                  mobility movement. Redshift's commitment to quality and
                  sustainability makes it a brand I'm proud to represent.
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 rounded-none my-3">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="text-white"
              />
              <div className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light">
                <GoDotFill className="mt-1" />
                Click to open this one and close others
              </div>
              <div className="collapse-content text-start">
                <div className="bg-base-200">
                  As an agent for Redshift, I've seen the positive response from
                  customers firsthand. The crowd funding model is inclusive and
                  allows people from all walks of life to be part of the green
                  mobility movement. Redshift's commitment to quality and
                  sustainability makes it a brand I'm proud to represent.
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 rounded-none my-3">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="text-white"
              />
              <div className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light">
                <GoDotFill className="mt-1" />
                Click to open this one and close others
              </div>
              <div className="collapse-content text-start">
                <div className="bg-base-200">
                  As an agent for Redshift, I've seen the positive response from
                  customers firsthand. The crowd funding model is inclusive and
                  allows people from all walks of life to be part of the green
                  mobility movement. Redshift's commitment to quality and
                  sustainability makes it a brand I'm proud to represent.
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 rounded-none my-3">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="text-white"
              />
              <div className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light">
                <GoDotFill className="mt-1" />
                Click to open this one and close others
              </div>
              <div className="collapse-content text-start">
                <div className="bg-base-200">
                  As an agent for Redshift, I've seen the positive response from
                  customers firsthand. The crowd funding model is inclusive and
                  allows people from all walks of life to be part of the green
                  mobility movement. Redshift's commitment to quality and
                  sustainability makes it a brand I'm proud to represent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
