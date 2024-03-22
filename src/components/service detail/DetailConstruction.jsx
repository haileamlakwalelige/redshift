import React from "react";
import cons from "../../assets/cons.png";
import expert from "../../assets/expert.png";
import dot from "../../assets/dot.png";

const DetailConstruction = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${expert})` }}
      className="px-2 sm:px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat py-10"
    >
      <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-end items-end">
        <div className="lg:w-3/5">
          <div className=" flex justify-center items-start flex-col ml-2 py-6">
            <p className="items-end max-w-full font-extrabold  text-secondary text-start text-[18px] lg:text-[20px]  px-2 pb-2">
              CONSTRUCTION EXPERTISE AND SOLUTIONS
            </p>
            <span className="h-1 -mt-1 lg:-mt-2 ml-10 min-w-[300px] md:min-w-[400px] text-center flex justify-center items-center bg-primary"></span>
          </div>
          <p className="text-secondary text-[16px] text-start px-2 md:pr-4 lg:pr-8 lg:text-[20px]">
            At Redshift Corp, our commitment to excellence extends beyond
            manufacturing electric and hybrid vehicles; we bring our expertise
            to the construction sector, delivering comprehensive solutions
            tailored to meet diverse project requirements. With over seven years
            of combined experience, Redshift Corp has established itself as a
            key player in the construction industry.
          </p>

          <div>
            <div className=" flex justify-center items-start flex-col ml-2 py-6">
              <p className="items-end max-w-full font-extrabold  text-secondary text-start text-[18px] lg:text-[20px]  px-2 pb-2">
                KEY SERVICE OFFERINGS{" "}
              </p>
              <span className="h-1 -mt-1 lg:-mt-2 ml-10 min-w-[150px]  text-center flex justify-center items-center bg-primary"></span>
            </div>
            <div>
              <p className="text-sub mt-4 text-[18px] lg:text-[20px] font-medium">
                Infrastructure Development
              </p>
              <ul>
                <li>
                  <div className="flex gap-2 mt-2">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Road Construction
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex gap-2 mt-2">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Building Construction
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex gap-2 mt-2">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Railway Construction
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <p className="text-sub mt-4 text-[18px] lg:text-[20px] font-medium">
                Project Management and Consultancy:
              </p>
              <ul>
                <li>
                  <div className="flex gap-2 mt-1">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Redshift offers end-to-end project management services,
                      ensuring seamless execution from conception to completion.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="flex gap-2 mt-2">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Our consultancy services provide valuable insights,
                      feasibility studies, and strategic planning to optimize
                      project outcomes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sub mt-4 text-[18px] lg:text-[20px] font-medium">
                International Expansion:
              </p>
              <ul>
                <li>
                  <div className="flex gap-2 mt-2">
                    <img
                      src={dot}
                      alt=""
                      className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                    />
                    <p className="text-secondary text-[16px] md:text-[20px] ">
                      Redshift's commitment to growth extends beyond national
                      borders. In 2021, we expanded internationally, opening a
                      construction company in Rwanda, bringing our expertise to
                      new regions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            src={cons}
            alt=""
            className="max-h-[580px] max-w-[468px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailConstruction;
