import React from "react";
import dot from "../../assets/dot.png";
import us from "../../assets/us.png";
import them from "../../assets/them.png";

const DetailWhat = () => {
  return (
    <div className="px-2 sm:px-6 md:px-12 lg:px-20">
      <div className=" flex justify-center items-center flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold  text-secondary text-center text-[30px] md:text-[35px] lg:text-[40px] px-2">
          WHAT IS THE DIFFERENCE?
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 xl:gap-32 md:gap-16">
        <div>
          <div className=" flex justify-center items-center flex-col ml-2 py-6">
            <p className="items-end max-w-[100px] font-extrabold  text-secondary text-center text-[30px] md:text-[35px] lg:text-[40px] px-2">
              THEM
            </p>
            <span className="h-1 -mt-1 lg:-mt-2 ml-10 min-w-[150px]  bg-primary"></span>
          </div>
          <ul>
            <li>
              <div className="flex gap-2">
                <img
                  src={dot}
                  alt=""
                  className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                />
                <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                  Fuel capacity of 9 litters max
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  No electrical option
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Not fully enclosed cabin
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Low speed and energy up to 250cc max in the market
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Low ground clearance
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Fuel consumption is so high
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Motor bike handle and manually operated
                </p>
              </div>
            </li>
          </ul>
          <div>
            <img src={them} alt="" className="mt-10" />
          </div>
        </div>
        <div>
          <div className=" flex justify-center items-center flex-col ml-2 py-6">
            <p className="items-end max-w-[100px] font-extrabold  text-secondary  text-center text-[30px] md:text-[35px] lg:text-[40px] px-2">
              US
            </p>
            <span className="h-1 -mt-1 lg:-mt-2  min-w-[70px]  bg-primary"></span>
          </div>
          <ul>
            <li>
              <div className="flex gap-2">
                <img
                  src={dot}
                  alt=""
                  className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                />
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Fuel capacity of 26 litters minimum{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Have electrical options{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Fully enclosed cabin luxury type{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  300cc minimum capacity{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  High ground clearance{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  Steering wheel car type{" "}
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
                <p className="text-secondary text-start text-[16px] md:text-[20px] lg:text-[24px]">
                  A three wheeler car model{" "}
                </p>
              </div>
            </li>
          </ul>
          <div>
            <img src={us} alt="" className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWhat;
