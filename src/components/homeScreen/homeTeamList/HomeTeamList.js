import React, { useState } from "react";
import "./HomeTeamList.css";
import HomeTeamCard from "./HomeTeamCard";

const HomeTeamList = ({ teamList }) => {
  const { sectionName, sectionSlogan, team } = teamList;
  const [member]=useState(0);

  return (
    <div className="h-[100%]  lg:h-[100vh] xl:h-[100vh] 2xl:h-[90vh]">
      <div className=" py-14 teamBackground  lg:h-[80vh] 2xl:h-[65vh]">
        <div className=" container  mx-auto xl:w-[62%] px-4 lg:px-0 ">
          <div className="text-center ">
            <h2 className="text-[#55B4F3] text-2xl font-semibold">
              {sectionName}
            </h2>
            <h1 className=" text-6xl text-white font-medium pt-2">
              {sectionSlogan}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center pt-16  gap-4 lg:gap-4  ">
            {team.slice(0,3).map((item) => (
              <HomeTeamCard home={true} key={item.id} team={item} member={member}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeamList;
