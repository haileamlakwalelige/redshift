import React, { useEffect, useState } from "react";
import dot from "../../assets/dot.png";
import { useParams } from "react-router-dom";

const BlogDescription = () => {
  const { id } = useParams();
  const [single, setSingle] = useState([]);
  console.log("id", id);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.100.29:8000/api/blogs/" + id // Add a slash before the title
        );
        console.log("response", response);
        if (!response.ok) {
          throw new Error("Network response was not oka");
        }
        const data = await response.json();
        setSingle(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]); // Include title in the dependency array to fetch data when title changes

  console.log("Data", single);

  console.log("Data", single);
  return (
    <div className="px-2 md:px-4 lg:px-8">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[20px] md:text-[22px] lg:text-[24px] px-2 py-3">
          {single.title}
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3  lg:ml-12 min-w-[300px] lg:min-w-[400px] xl:min-w-[500px]  bg-sub"></span>
      </div>
      <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
        {single.description}
      </p>
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          1. Trends in Sustainable Transportation:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Uncover the current trends shaping the sustainable transportation
            sector. From shifts in consumer preferences to regulatory changes,
            we analyze the forces driving the evolution of the industry.
          </p>
        </div>
      </div>

      {/* Two */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          2. Technological Advancements:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Stay at the forefront of technological innovations in the realm of
            electric and hybrid vehicles. Our experts break down the latest
            advancements, from battery technologies to smart charging solutions,
            providing a comprehensive understanding of the tech driving
            sustainable mobility.
          </p>
        </div>
      </div>

      {/* Three */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          3. Environmental Impact Assessment:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Explore the environmental benefits of embracing electric and hybrid
            vehicles. We conduct detailed assessments of the positive impact
            these technologies have on reducing carbon emissions, improving air
            quality, and contributing to global climate action goals.
          </p>
        </div>
      </div>

      {/* Four */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          4. Market Dynamics and Opportunities:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Gain insights into the market dynamics surrounding sustainable
            mobility. Our analysis covers market growth, challenges, and
            opportunities, offering valuable information for businesses,
            policymakers, and enthusiasts alike.
          </p>
        </div>
      </div>

      {/* Five */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          5. Policy and Regulatory Landscape:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Stay informed about the ever-changing policy and regulatory
            landscape governing sustainable transportation. Our experts provide
            in-depth analyses of government initiatives, incentives, and
            regulations influencing the adoption of electric and hybrid
            vehicles.
          </p>
        </div>
      </div>

      {/* Six */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          6. Innovation Showcases:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Immerse yourself in the world of innovation with showcases of
            groundbreaking technologies and design concepts. From concept
            electric vehicles to Eco-friendly materials, we highlight the
            creative minds driving change in the industry.
          </p>
        </div>
      </div>

      {/* Seven */}
      <div className="flex flex-col justify-center  items-start mt-5">
        <p className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
          7. Global Perspectives:
        </p>
        <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
          <img src={dot} alt="" className="h-2 w-2 mt-2" />
          <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
            Explore global perspectives on sustainable mobility. Our insights
            extend beyond borders, examining how different regions and countries
            are embracing electric and hybrid vehicles to address unique
            challenges and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
