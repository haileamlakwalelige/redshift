import React from "react";
import ServiceIntro from "../components/service/ServiceIntro";
import ServiceCard from "../components/service/ServiceCard";

const Service = () => {
  return (
    <div className="overflow-x-hidden">
      <ServiceIntro />
      <ServiceCard />
    </div>
  );
};

export default Service;
