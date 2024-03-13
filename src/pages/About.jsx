import React from 'react'
import AboutWhat from "../components/about/AboutWhat";
import AboutMission from "../components/about/AboutMission";
import AboutVision from "../components/about/AboutVision";
import AboutEvolution from "../components/about/AboutEvolution";
import AboutPlan from "../components/about/AboutPlan";
import AboutMarket from "../components/about/AboutMarket";
import AboutBusiness from "../components/about/AboutBusiness";
import AboutPartners from "../components/about/AboutPartners";

const About = () => {
  return (
    <div className="mt-32">
      <AboutWhat />
      <AboutMission />
      <AboutVision />
      <AboutEvolution />
      <AboutPlan />
      <AboutMarket />
      <AboutBusiness />
      <AboutPartners />
    </div>
  );
};

export default About