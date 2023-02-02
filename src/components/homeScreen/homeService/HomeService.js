import React from "react";
import "./HomeService.css";
import HomeServiceCard from "./HomeServiceCard";
import HomeServiceDesc from "./HomeServiceDesc";

const HomeService = ({homeServiceList}) => {
  return (
    <section  className="py-7 xl:py-0 bg-[#F3F3F3">
      <div className="lg:pt-8 h-[100%] lg:h-[85vh] xl:h-[110vh] 2xl:h-[60vh] homeBackground ">
        <div className="text-center pt-24">
          <h2 className="text-[#55B4F3] text-2xl font-semibold ">{homeServiceList[0].sectionName}</h2>
          <h1 className="text-white text-6xl font-medium pt-2 ">{homeServiceList[0].sectionSlogan}</h1>
        </div>

        <div className="container xl:w-4/6 mx-auto xl:px-10 2xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-16  gap-4 lg:gap-0">
          { homeServiceList[0].serviceList.map((item,index)=><HomeServiceCard key={index} service={item}/>)}
        </div>
      </div>

      <div className="h-[100%] lg:h-[75vh]  py-10 md:py-7 lg:pt-[200px] xl:pt-[200px] xl:pb-[350px] 2xl:pt-[270px] bg-[#F3F3F3]">
        <HomeServiceDesc homeServiceList={homeServiceList}/>
      </div>

    </section>
  );
};

export default HomeService;
