import React from "react";
import ProductIntro from "../components/product/ProductIntro";
import Scroll from "../components/Reusable/Scroll";
import ProductFourTwo from "../components/product/ProductFourTwo";

const ProductFour = () => {
  return (
    <div className="mt-32">
      <ProductIntro />
      <div className="lg:mt-44">
        <Scroll />
      </div>
      <ProductFourTwo />
    </div>
  );
};

export default ProductFour;
