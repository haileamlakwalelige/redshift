import React from "react";
import dot from "../../assets/dot.png";

const DetailKey = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="flex justify-center items-start flex-col ml-2 py-6 px-2 sm:px-4 md:px-6 lg:px-">
        <p className="  items-end font-extrabold vie text-secondary text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
          KEY SERVICE OFFERINGS
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-10 min-w-[222px]  bg-primary"></span>
      </div>
      <div>
        <p className="font-bold text-start text-primary text-[20px] md:text-[22px] lg:text-[24px] py-2">
          Express Cars for Sustainable Travel
        </p>
        <ul>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Road Construction: From urban roads to highways, we specialize
                in creating robust and sustainable road networks, enhancing
                connectivity across regions.
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Building Construction: Our expertise extends to constructing
                buildings with a focus on quality, safety, and adherence to
                timelines.
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Railway Construction: Redshift has experience in contributing to
                railway projects, facilitating efficient transportation systems.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Second */}
      <div>
        <p className="font-bold text-start text-primary text-[20px] md:text-[22px] lg:text-[24px] py-2">
          Project Management and Consultancy:
        </p>
        <ul>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Redshift offers end-to-end project management services, ensuring
                seamless execution from conception to completion.
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Our consultancy services provide valuable insights, feasibility
                studies, and strategic planning to optimize project outcomes.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Three */}
      <div>
        <p className="font-bold text-start text-primary text-[20px] md:text-[22px] lg:text-[24px] py-2">
          Innovative Solutions:
        </p>
        <ul>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Redshift Corp embraces innovation in construction, incorporating
                modern technologies and sustainable practices for efficient and
                eco-friendly projects.
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                We bring creative solutions to address specific challenges,
                enhancing project efficiency and minimizing environmental
                impact.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Four */}
      <div>
        <p className="font-bold text-start text-primary text-[20px] md:text-[22px] lg:text-[24px] py-2">
          International Expansion:
        </p>
        <ul>
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                Redshift's commitment to growth extends beyond national borders.
                In 2021, we expanded internationally, opening a construction
                company in Rwanda, bringing our expertise to new regions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailKey;
