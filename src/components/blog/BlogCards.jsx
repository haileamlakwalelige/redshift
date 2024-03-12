import React, { useEffect, useState } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

const BlogCards = () => {
  const [hoverStates, setHoverStates] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.100.29:8000/api/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
        // Initialize hover states array with false for each blog item
        setHoverStates(Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="mt-16">
      <div className="carousel gap-10 lg:gap-16 px-2 sm:px-4 md:px-8 lg:px-16 mx-2 sm:mx-4 md:mx-8">
        {blogs.map((item, index) => (
          <div className="carousel-item" key={item.id}>
            {item.title && item.content && item.date && (
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="section bg-white max-w-[280px] min-h-[410px] md:min-h-[416px] lg:min-h-[450px] rounded-xl border-[1px] z-20 overflow-y-hidden shadow-xl"
              >
                <p className="text-primary line-clamp-2 my-6 px-2 inter border-b-[2px] border-primary font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  {item.title}
                </p>
                <p className="text-black line-clamp-6 mb-10 text-center text-[14px] py-5 px-4 inter">
                  {item.content}
                </p>
                <div className="flex justify-start items-center gap-6  px-4">
                  <IoTodayOutline className="font-bold" />
                  <p className="font-light text-[#00297A] text-[12px] inter">
                    {item.date}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Wave
                    fill="#36A0D2"
                    paused={!hoverStates[index]}
                    options={{
                      height: 60,
                      amplitude: 40,
                      speed: 0.3,
                      points: 2,
                    }}
                    className="bottom-0 -mb-2 z-10 -mt-8 rounded-b-2xl "
                  />
                  <Link
                    to={`/blog/${encodeURIComponent(item.id)}`}
                    className="-mt-24 text-primary font-bold text-[16px] md:text-[18px] lg:text-[20px] pt-14 z-20"
                  >
                    <p>Read More ...</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
