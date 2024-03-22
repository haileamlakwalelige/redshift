import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailIntro from "../components/service detail/DetailIntro";
import DetailImage from "../components/service detail/DetailImage";
import DetailView from "../components/service detail/DetailView";
import DetailSecondIntro from "../components/service detail/DetailSecondIntro";
import DetailSupply from "../components/service detail/DetailSupply";
import DetailWhat from "../components/service detail/DetailWhat";
import DetailConstruction from "../components/service detail/DetailConstruction";
import DetailProject from "../components/service detail/DetaiProject";
import DetailScroll from "../components/service detail/DetailScroll";
import Gallery from "../components/service/Gallery";

const ServiceDetail = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the hash fragment
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="mt-32 bg-white overflow-x-hidden">
      <DetailIntro />
      <DetailImage />
      <DetailView />
      <DetailSecondIntro />
      <DetailSupply />
      <Gallery />
      <DetailWhat />
      <DetailConstruction />
      <DetailProject />
      <DetailScroll />
    </div>
  );
};

export default ServiceDetail;
