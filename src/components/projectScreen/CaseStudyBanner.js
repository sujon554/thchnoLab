import React from 'react';

const CaseStudyBanner = ({project}) => {
    return (
        <div className="grid grid-cols-12 gap-5  justify-items-center ">
          <div className="col-span-12 lg:col-span-9 w-full gap-3">
            <img src={project.projectBannerImage} alt="" className="w-[100%]" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-5  py-10 px-5 h-full w-full bg-[#F3F3F3]">
            <div>
              <p className="uppercase font-semibold  text-gray-500">Client</p>
              <p className="text-[#60A5FA] font-bold">{project.clientsInfo.clientName}</p>
            </div>
            <hr className="whiteLine"/>

            <div>
              <p className="uppercase font-semibold text-gray-500">date</p>
              <p className="text-[#60A5FA] font-bold">{project.clientsInfo.date}</p>
            </div>

            <div>
              <p className="uppercase font-semibold text-gray-500">category</p>
              <p className="text-[#60A5FA] font-bold">{project.clientsInfo.category}</p>
            </div>

            <hr className="whiteLine"/>

            <div className="flex gap-4">
              {project.clientsInfo.social.map((item, index) => (
                <a key={index} target="__blank" href={item[1]} className="bg-white p-2 px-4 rounded-full text-lg">
                  <i className={item[0]}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
    );
};

export default CaseStudyBanner;