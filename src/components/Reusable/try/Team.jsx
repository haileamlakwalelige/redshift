import React, { useState } from "react";
import "./Team.css"; // Import the CSS file containing the styles
import test from "../../../assets/team.png";
import team1 from "../../../assets/team1.png";
import teamm from "../../../assets/teamm.png";
import teamc from "../../../assets/teamc.png";
import teaml from "../../../assets/teaml.png";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Eyerusalem Senay",
      position: "Sales",
      photo: teamm,
    },
    {
      id: 2,
      name: "Terefa Gashaw",
      position: "Chief Operating Officer",
      photo: team1,
    },
    {
      id: 3,
      name: "Getachew Aragaw",
      position: "CEO,REDSHIFT CORPS LTD",
      photo: teamc,
    },
    {
      id: 4,
      name: "Lamrot Wada",
      position: "Marketing",
      photo: teaml,
    },
  ];

  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

  const handleMemberClick = (index) => {
    if (selectedMemberIndex === index) {
      //   setSelectedMemberIndex(null); // Deselect the member if already selected
    } else {
      setSelectedMemberIndex(index); // Select the member
    }
  };

  const filteredMembers = teamMembers.filter(
    (_, index) => index !== selectedMemberIndex
  );

  return (
    <div
      style={{
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pb-10"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="flex justify-center items-start flex-col ml-2 pt-20  mb-3">
        <p className="  items-end font-extrabold vie text-secondary text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] pb-2 ">
          OUR TEAMS
        </p>
        <span className="h-[3px] -mt-1 lg:-mt-2 ml-3 lg:ml-12 xl:ml-16 min-w-[112px] lg:min-2-[350px]  text-end bg-primary"></span>
      </div>
      <div className="team-section flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-10 overflow-x-hidden h-full overflow-clip py-5 px-2 sm:px-6 md:px-8 lg:px-16">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-wrap justify-center items-center flex-col gap-1 team-member ${
              selectedMemberIndex === index ? "selected" : ""
            }`}
            onClick={() => handleMemberClick(index)}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="rounded-full h-[100px] w-[100px]"
            />
            <h3 className="mt-2 text-[14px]">{member.name}</h3>
            <p className="text-[12px]">{member.position}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center md:mt-32">
        {selectedMemberIndex !== null && (
          <div className="flex justify-center items-center flex-col max-w-[500px]">
            <img
              src={teamMembers[selectedMemberIndex].photo}
              alt={teamMembers[selectedMemberIndex].name}
              className="rounded-full h-[200px] w-[200px]"
            />
            <h3 className="mt-5 text-[18px] lg:text-[20px] xl:text-[22px] font-bold text-secondary">
              {teamMembers[selectedMemberIndex].name}
            </h3>
            <p className="text-center text-[16px] font-bold text-secondary">
              {teamMembers[selectedMemberIndex].position}
            </p>
            <p className="text-start text-[16px]">
              {teamMembers[selectedMemberIndex].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
