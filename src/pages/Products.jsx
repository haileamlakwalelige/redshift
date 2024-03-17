import React from "react";
import ProductIntro from "../components/product/ProductIntro";
import Scroll from "../components/Reusable/Scroll";
import ProductThree from "../components/product/ProductThree";
import ProductSlider from "../components/product/ProductSlider";
import ProductScroll from "../components/product/ProductScroll";

const Products = () => {
  return (
    <div className=" overflow-x-hidden">
      {/* <ProductIntro /> */}
      <ProductSlider />
      <div className="lg:mt-36">
        {/* <Scroll /> */}
        <ProductScroll />
      </div>
      <ProductThree />
    </div>
  );
};

export default Products;
