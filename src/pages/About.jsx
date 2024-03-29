import React from 'react'
import AboutWhat from "../components/about/AboutWhat";
import AboutMission from "../components/about/AboutMission";
import AboutVision from "../components/about/AboutVision";
import AboutEvolution from "../components/about/AboutEvolution";
import AboutPlan from "../components/about/AboutPlan";
import AboutMarket from "../components/about/AboutMarket";
import AboutBusiness from "../components/about/AboutBusiness";
import Team from "../components/Reusable/try/Team";
// import AboutPartners from "../components/about/AboutPartners";

const About = () => {
  return (
    <div className='bg-white'>
      <AboutWhat />
      <AboutMission />
      <AboutVision />
      <AboutEvolution />
      <Team />
      <AboutPlan />
      <AboutMarket />
      <AboutBusiness />
      {/* <AboutPartners /> */}
    </div>
  );
};

export default About