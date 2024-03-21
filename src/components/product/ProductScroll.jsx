import React, { useState, useEffect } from "react";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/car1.png";
import ser4 from "../../assets/car2.png";
import ser5 from "../../assets/ser1.png";
import ser6 from "../../assets/ser2.png";
import ser7 from "../../assets/car1.png";
import ser8 from "../../assets/car2.png";
import ProductFourTwo from "./ProductFourTwo";
import ProductThree from "./ProductThree";



function ProductScroll({ onImageSelect }) {
  const images = [
    { src: ser1, data: "Data for image 1", id: 1 },
    { src: ser2, data: "Data for image 2", id: 2 },
    { src: ser3, data: "Data for image 3", id: 3 },
    { src: ser4, data: "Data for image 4", id: 4 },
    { src: ser5, data: "Data for image 1", id: 5 },
    { src: ser6, data: "Data for image 2", id: 6 },
    { src: ser7, data: "Data for image 3", id: 7 },
    { src: ser8, data: "Data for image 4", id: 8 },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onImageSelect(image.data); // Call the onImageSelect prop and pass the selected image data
  };

  useEffect(() => {
    setSelectedImage(images[0]);
  }, []);

  return (
    <div data-aos="slide-up" data-aos-duration="1500" className="px-2 sm:px-6">
      <div className="flex-col lg:flex-row h-70vh gap-4 md:gap-10 lg:gap-20 xl:gap-28 rounded-lg p-4 flex px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="lg:h-[80vh] gap-4 carousel carousel-center lg:carousel-vertical rounded-box">
          {images.map((image) => (
            <div key={image.id} className="carousel-item">
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                onClick={() => handleImageClick(image)}
                className={`carousel-item block mb-4 cursor-pointer h-[203px] w-[288px] ${
                  selectedImage === image ? " rounded-xl" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className="data-display">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt="Image Data"
              className="h-full w-full  lg:w-[60vw]"
            />
          )}
        </div>
      </div>
      {selectedImage && (
        <div>
          {selectedImage.id % 2 === 0 ? <ProductFourTwo /> : <ProductThree />}
        </div>
      )}
    </div>
  );
}

export default ProductScroll;