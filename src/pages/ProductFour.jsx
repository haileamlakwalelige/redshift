import React from "react";
import ProductIntro from "../components/product/ProductIntro";
import Scroll from "../components/Reusable/Scroll";
import ProductFourTwo from "../components/product/ProductFourTwo";
import ProductSlider from "../components/product/ProductSlider";
import ProductScroll from "../components/product/ProductScroll";

const ProductFour = () => {
  return (
    <div className="mt-28 overflow-x-hidden">
      {/* <ProductIntro /> */}
      <ProductSlider />
      <div className="lg:mt-36">
        {/* <Scroll /> */}
        <ProductScroll />
      </div>
      <ProductFourTwo />
    </div>
  );
};

export default ProductFour;
