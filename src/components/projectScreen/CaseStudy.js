import React from "react";
import "./CaseStudy.css";
import CaseStudyBanner from "./CaseStudyBanner";
import CaseStudyDynamicDetail from "./CaseStudyDynamicDetail";

const CaseStudy = ({ project }) => {
  const arrow = <i className="fa-solid fa-angle-right"></i>;
  return (
    <div >
      <div className="caseStudyBg py-20 flex flex-col justify-center items-center">
        <h2 className=" text-white text-3xl font-semibold uppercase">
          {project?.projectTitle}
        </h2>
        <p className="text-gray-300 flex justify-center items-center gap-3">
          Home{arrow}Project{arrow}
          {project?.projectTitle}
        </p>
      </div>

      <div className="container mx-auto py-5 flex flex-col  items-center w-[90vw] lg:w-[60vw]">
        <CaseStudyBanner project={project} />

        <div className="w-[90vw] lg:w-[50vw]">
          <div className="py-5">
            <h2 className="text-2xl font-bold pb-3">{project.detailTitle}</h2>
            <h2 className="text-justify text-lg">{project.detailParagraph}</h2>
          </div>

          <div className="grid grid-cols-12 gap-5  justify-items-center  ">
            {project.dynamicDetail.map((item, index) => <CaseStudyDynamicDetail key={index} detail={item} right={index}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
