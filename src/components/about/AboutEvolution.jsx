import React from "react";
import bg from '../../assets/redbgs.png';

const AboutEvolution = () => {
  return (
    <div className="px-2">
      <div className="flex justify-start items-start flex-col py-10 ">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-16">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="h-full w-full lg:w-2/5 mt-10"
          >
            <div className=" flex justify-center items-start flex-col ml-2 py-6">
              <p className="items-end max-w-full font-extrabold vie text-secondary text-start text-[18px] lg:text-[20px]  px-2 pb-2">
                EVOLUTION{" "}
              </p>
              <span className="h-1 lg:-mt-2 pl-12 min-w-[120px] ml-10 text-center bg-primary"></span>
            </div>
            <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
              Since our inception in 2016, Red Shift has undergone a remarkable
              evolution, transforming from a construction-focused entity to a
              multi-faceted company operating at the forefront of innovation.
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="col-span-1 lg:col-span-2 w-full  lg:w-3/5 px-4"
          >
            <div data-aos="fade-left" data-aos-duration="2500">
              <div className="h-[600px] w-full carousel carousel-vertical rounded-box">
                <div className="carousel-item justify-center items-center">
                  <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 lg:gap-16 py-8 justify-center lg:justify-start items-center ">
                    <div className="bg-secondary text-white  rounded-xl ">
                      <p className=" mx-3 py-4 text-center text-[32px] px-20  pop font-light">
                        2016
                      </p>
                    </div>
                    <div className="flex justify-center items-center px-5">
                      <p className="text-center text-secondary py-3 text-[20px] pop font-light">
                        We have been in construction business of roads ,
                        buildings ,rails way construction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="flex flex-wrap lg:flex-nowrap flex-row-reverse gap-5 md:gap-10 lg:gap-16 py-8 justify-center lg:justify-start  items-center ">
                    <div className="bg-secondary text-white  rounded-xl ">
                      <p className=" mx-3 py-4 text-center text-[32px] px-20  pop font-light">
                        2018
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-secondary py-3 text-[20px] pop font-light">
                        Redshift has organized manufacturing plant in leased
                        from government land in woldia industry zone.
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className="carousel-item">
                  <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 lg:gap-16 py-8 justify-center lg:justify-start items-center ">
                    <div className="bg-secondary text-white  rounded-xl ">
                      <p className=" mx-3 py-4 text-center text-[32px] px-20  pop font-light">
                        2021
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-secondary py-3 text-[20px] pop font-light">
                        Redshift has opened our first international construction
                        company in Rwanda.
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className="carousel-item ">
                  <div className="flex flex-wrap lg:flex-nowrap flex-row-reverse gap-5 md:gap-10 lg:gap-16 py-8 justify-center lg:justify-start items-center ">
                    <div className="bg-secondary text-white  rounded-xl ">
                      <p className=" mx-3 py-4 text-center text-[32px] px-20  pop font-light">
                        2022
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-secondary py-3 text-[20px] pop font-light">
                        Redshift has already incorporated with the suppliers to
                        work as a sole partnership for the tricycle
                        manufacturing in east Africa.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvolution;
