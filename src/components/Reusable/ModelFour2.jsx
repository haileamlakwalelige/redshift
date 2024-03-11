import React from "react";
import dot from "../../assets/dot.png";

const ModelFour2 = () => {
  return (
    <div>
      <div className="flex justify-start items-start flex-col">
        <p className="text-primary font-bold mt-3 text-16px] md:text-[20px] lg:text-[24px]">
          2. Model: Electric Express Car
        </p>
        <ul className="p-3 flex flex-col gap-2">
          <li>
            <div className="flex gap-2">
              <img
                src={dot}
                alt=""
                className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
              />
              <p className="text-secondary text-[16px] md:text-[20px] lg:text-[24px]">
                Capacity: Configured for express transportation
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
              <p className="text-secondary text-[16px] md:text-[20px] lg:text-[24px]">
                Power Source: Fully Electric
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <img
                  src={dot}
                  alt=""
                  className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                />
                <p className="text-secondary text-[16px] md:text-[20px] lg:text-[24px]">
                  Features:
                </p>
              </div>
              <div className="px-2 md:px3 lg:px-6">
                <ul>
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Digital dashboard and screen
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
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Sleek and aerodynamic car body{" "}
                      </p>
                    </div>
                  </li>

                  {/* T */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        All-in-one central console
                      </p>
                    </div>
                  </li>
                  {/* four */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Luxury instrument panel{" "}
                      </p>
                    </div>
                  </li>

                  {/* Five */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Reversing image integrated into the vehicle{" "}
                      </p>
                    </div>
                  </li>

                  {/* Six */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Anti-flame retardant interior for safety{" "}
                      </p>
                    </div>
                  </li>

                  {/* Seven */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Comfortable seats for express deliveries
                      </p>
                    </div>
                  </li>

                  {/* Eight */}
                  <li>
                    <div className="flex gap-2">
                      <img
                        src={dot}
                        alt=""
                        className="lg:w-[12px] lg:h-[12px] w-[5px] h-[5px] mt-3"
                      />
                      <p className="text-secondary text-start font-light text-[16px] md:text-[20px] lg:text-[24px]">
                        Additional features: Warm wind blower, electric fan,
                        wiper, bumper, roof window, front electric window, rear
                        handle glass
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModelFour2;
