import React from "react";
import ProjectList from "../../projectScreen/ProjectList";

const HomeProjectsSection = ({homeProjectList}) => {
    const {sectionName,sectionSlogan,projectList} = homeProjectList;
  return (
    <div className="container xl:w-[62%] mx-auto px-4 py-10 mt-64 xl:px- 2xl:px-0">
      <div className="text-center pt-14">
        <h2 className="text-[#55B4F3] text-2xl font-semibold">
          {sectionName}
        </h2>
        <h1 className=" text-6xl font-medium pt-2">
          {sectionSlogan}
        </h1>
      </div>
        <ProjectList  projectList={projectList}/>      
    </div>
  );
};

export default HomeProjectsSection;
