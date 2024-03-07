import React, { useState, useEffect } from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/car1.png";
import ser4 from "../../assets/car2.png";

function Scroll() {
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
    <div>
      <div className="flex-col lg:flex-row h-70vh gap-4 rounded-lg p-4 flex ">
        <div className="lg:h-[90vh] gap-4 carousel carousel-center lg:carousel-vertical rounded-box">
          {images.map((image, index) => (
            <div className="carousel-item">
              <img
                key={index}
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                className={`carousel-item block mb-4 cursor-pointer h-[203px] w-[288px] ${
                  selectedImage === image.src
                    ? "border-2 border-primary rounded-xl"
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
              className="lg:h-[80vh] h-[50vh] w-screen"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Scroll;
