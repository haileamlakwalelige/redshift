import React from "react";
import DetailIntro from "../components/service detail/DetailIntro";
import backgroundImage from "../assets/aboutback.png";
import DetailImage from "../components/service detail/DetailImage";
import DetailView from "../components/service detail/DetailView";
import DetailSecondIntro from "../components/service detail/DetailSecondIntro";
import DetailSupply from "../components/service detail/DetailSupply";
import DetailWhat from "../components/service detail/DetailWhat";

const ServiceDetail = () => {
  return (
    <div
      className="mt-32 bg-white"
    >
      <DetailIntro />
      <DetailImage />
      <DetailView />
      <DetailSecondIntro />
      <DetailSupply />
      <DetailWhat />
    </div>
  );
};

export default ServiceDetail;
