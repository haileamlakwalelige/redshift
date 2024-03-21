import React, { useEffect, useState } from "react";
import dot from "../../assets/dot.png";
import { useParams } from "react-router-dom";

const BlogDescription = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.100.29:8000/api/blogs/${id}`
        );
        const data = await response.json();

        // Check if category exists and is a string before parsing
        if (data.category && typeof data.category === 'string') {
          data.category = JSON.parse(data.category.replace(/=>/g, ":"));
        }

        setBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-2 md:px-4 lg:px-8">
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-full font-extrabold vie text-secondary text-[20px] md:text-[22px] lg:text-[24px] px-2 py-3">
          {blogData.title}
        </p>
        <span className="h-1 -mt-1 lg:-mt-2  min-w-[300px]   bg-sub"></span>
      </div>
      <p className="text-secondary text-[16px] md:text-[20px] text-start  font-light">
        {blogData.description}
      </p>
      {blogData && blogData.category && blogData.category.length > 0 && (
        <ul>
          {blogData.category.map((category, index) => (
            <div
              className="flex flex-col justify-center items-start mt-5"
              key={index}
            >
              <h3 className="font-bold text-[18px] md:text-[19px] lg:text-[21px] text-sub">
                {index + 1}. {category.title}
              </h3>
              <div className="flex gap-3 mx-2 md:mx-4 lg:mx-6">
                <img src={dot} alt="" className="h-2 w-2 mt-2" />
                <p className="text-secondary text-[16px] md:text-[20px] text-start font-light">
                  {category.description ?? "No description available"}
                </p>
              </div>
            </div>
          ))}
        </ul>
      )}
      {!blogData.category && <p>No categories available</p>}
    </div>
  );
};

export default BlogDescription;
