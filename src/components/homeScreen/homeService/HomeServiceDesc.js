import React from "react";
import HomeServiceMiniCard from "./HomeServiceMiniCard";

const HomeServiceDesc = ({ homeServiceList }) => {
  return (
    <div className="container xl:w-4/6 my-48 mx-auto grid grid-cols-1  lg:grid-cols-5 lg:gap-10 px-4 lg:px-10 2xl-px-0  homeServiceDec ">

      <div className="lg:col-span-2 ">
        <h3 className="font-bold pl-1 text-xl text-[#55B4F3] uppercase">
          {homeServiceList[0].title}
        </h3>
        <h3 className=" text-5xl lg:text-6xl py-6  uppercase">
          {homeServiceList[0].slogan}
        </h3>
        <p className="text-justify text-lg pt-3">{homeServiceList[0].description}</p>
      </div>

      <div className="md:grid-cols-2 pt-10 lg:pt-0 lg:col-span-3 grid  grid-cols-1 lg:grid-cols-2 gap-2 px-2">
        {homeServiceList[0].miniServiceList.map((item, index) => (
          <HomeServiceMiniCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeServiceDesc;
