import React from "react";

const HomeServiceMiniCard = ({ service }) => {
  
  return (
    <div className="grid grid-cols-2 md:flex    gap-3 items-center p-3 pl-[10%] bg-white">
      <div className="bg-blue justify-self-center">
        <i className="fa-solid fa-check bg-blue-400 text-white font-bold text-3xl p-3"></i>
      </div>
      <div className=""> 
        <h2 className="uppercase text-xl font-medium">
          {service.serviceTitle}
        </h2>
      </div>
    </div>
  );
};

export default HomeServiceMiniCard;
