import React, { useState, useEffect } from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/car1.png";
import ser4 from "../../assets/car2.png";
import gallery from "../../assets/gallery.png";

function Gallery() {
  const images = [
    { src: ser1, data: "Data for image 1" },
    { src: ser2, data: "Data for image 2" },
    { src: ser3, data: "Data for image 3" },
    { src: ser4, data: "Data for image 4" },
    { src: ser1, data: "Data for image 1" },
    { src: ser2, data: "Data for image 2" },
    { src: ser3, data: "Data for image 3" },
    { src: ser4, data: "Data for image 4" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  useEffect(() => {
    setSelectedImage(images[0].src);
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <div
      style={{ backgroundImage: `url(${gallery})` }}
      className="px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-cover bg-center bg-no-repeat py-10"
    >
      <div className="flex justify-center items-start flex-col ml-2 py-3 mb-3">
        <p className="  items-end font-extrabold vie text-secondary text-[18px] pb-2  lg:text-[20px]">
          Gallery
        </p>
        <span className="h-[3px] -mt-1 lg:-mt-2 ml-3  lg:ml-3 min-w-[112px]  bg-primary"></span>
      </div>
      <div className="flex-col lg:flex-row h-70vh gap-4 md:gap-10 lg:gap-20 xl:gap-28 rounded-lg p-4 flex ">
        <div className="lg:h-[80vh] gap-4 carousel carousel-center lg:carousel-vertical rounded-box">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                className={`carousel-item block mb-4 cursor-pointer h-[203px] w-[288px] ${
                  selectedImage === image.src
                    ? "border-2 border-gray-100 rounded-xl"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className="data-display">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Image Data"
              className="h-full w-full min-w-[60vw]"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
