import React from "react";
import "./HomeTeamList.css";
import TeamModal from "./TeamModal";

const HomeTeamCard = ({ team, home}) => {


  return (
    <div className="bg-base-100 shadow projectCard">
      
      <label  htmlFor={team.name}  className="flex cursor-pointer">
        <div className={home?"sideBar w-[80px] flex flex-col justify-between items-center":"sideBar w-[70px] flex flex-col justify-between items-center"}>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="designation">{team.designation}</h1>
            <div className=" h-7 border-white border-[1px]"/>
          </div>

          <div>
          <div className="flex flex-col gap-2 pb-4 text-white text-lg">
            {team.social.map((item, index) => (
              <a key={index} target="__blank" href={item[1]}>
                <i className={item[0]}></i>
              </a>
            ))}
            </div>
          </div>
        </div>

        <div className="">
          <figure>
            <img src={team.image} className={home?"object-cover h-[500px] grayscale":"object-cover h-[380px] grayscale"} alt="Shoes" />
          </figure>
        </div>
      </label >
     
      <TeamModal memberInfo={team}/>
    </div>
  );
};

export default HomeTeamCard;
