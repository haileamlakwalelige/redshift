import React from "react";
import ServiceIntro from "../components/service/ServiceIntro";
import ServiceCard from "../components/service/ServiceCard";

const Service = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <ServiceIntro />
      <ServiceCard />
    </div>
  );
};

export default Service;
