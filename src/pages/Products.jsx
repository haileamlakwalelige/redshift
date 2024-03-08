import React from "react";
import ProductIntro from "../components/product/ProductIntro";
import Scroll from "../components/Reusable/Scroll";
import ProductThree from "../components/product/ProductThree";

const Products = () => {
  return (
    <div className="my-32">
      <ProductIntro />
      <div className="lg:mt-44">
        <Scroll />
      </div>
      <ProductThree />
    </div>
  );
};

export default Products;
