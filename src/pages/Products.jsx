import React, { useState } from "react";
import ProductThree from "../components/product/ProductThree";
import ProductFourTwo from "../components/product/ProductFourTwo";
import ProductSlider from "../components/product/ProductSlider";
import ProductScroll from "../components/product/ProductScroll";

const Products = () => {
  const [selectedImageData, setSelectedImageData] = useState(null);

  const handleImageSelect = (imageData) => {
    setSelectedImageData(imageData);
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-white">
      <ProductSlider />
      <div className="lg:mt-4">
        <ProductScroll onImageSelect={handleImageSelect} />
      </div>
    </div>
  );
};

export default Products;
