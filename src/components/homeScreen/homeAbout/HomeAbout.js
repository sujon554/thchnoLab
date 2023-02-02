import React from "react";
import "./About.css";

const HomeAbout = ({ homeAboutList }) => {
  const {

    image1,
    image2,
    sectionName,
    title1,
    title2,
    description,
    contries,
    icons,
    list
  } = homeAboutList;
  return (
    <div className="py-12 container mx-auto text-center about">
      <p className="text-[#55B4F3] text-2xl font-semibold pb-3">{sectionName}</p>
      <p className="text-4xl mx-3 ">{title1}</p>
      <p className="text-4xl mt-1 mx-3">{title2}</p>

      <div className="grid  grid-cols-1 lg:grid-cols-2 justify-items-center items-center mt-16 mx-auto">

        <div className="px-5 ml-32 md:ml-16 lg:ml-24 xl:ml-28 2xl:ml-32 images w-4/5 hidden lg:block">
          <img className="w-full h-3/5" src={image1} alt=""></img>
          <div className="grid grid-cols-2 pt-9 ">
            <span className=" bg-[#45AEFF] text-center">
              <p className=" xl:text-center text-xl lg:text-2xl 2xl:text-3xl text-white px-5 py-5 lg:py-6 xl:mx-auto xl:mt-3">
                {contries}
              </p>
            </span>
            <img className="h-full" src={image2} alt=""></img>
          </div>
        </div>

        {/* Describe sectation  sm:hidden  */}
        <div className="text-left md:text-left px-5 xl:w-10/12">
          <p className="text-justify sm:text-base md:text-xl pb-4">{description}</p>
          {
            list.map((listItem,index) => (
              <p key={index} className="text-xl leading-1 mt-2 font-semibold">
                <strong className="text-sky-500 text-2xl pr-3"> <i className={icons}></i></strong> {listItem} 
              </p>
            ))
          }



          {/* <div className="mt-8 sm:mt-2 xl:mt-16 2xl:mt-36">
            <button className="text-lg sm:text-base uppercase font-bold hover:text-white hover:bg-[#45AEFF]  border-4 border-[#45AEFF] px-8 py-5 mb-8 ">
              More About Us
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;


