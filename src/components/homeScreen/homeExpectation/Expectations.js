import React from "react";
import logo from "../../../resource/expectations/expectationLogo.png";
import "./Expectation.css";

const Expectations = ({expectation}) => {
  const {qualityTitle,qualityPara,focusTitle,focusPara1,focusPara2} = expectation;
  
  return (
    <div className="expectations py-12  ">
      <div className="container mx-auto xl:w-4/6 px-4">
      <div className="grid grid-cols-1  px-6 py-14 gap-5 md:grid-cols-2 md:gap-x-20 ">
        <div className="">
          <p className="text-3xl md:text-5xl xl:text-6xl 2xl:text-6xl 2xl:pr-20 text-white ">{qualityTitle} </p>

          <p className="text-white  py-5 text-sm  xl:text-base 2xl:pr-20">
           {qualityPara}
          </p>

        </div>
        <div className="">
          <img className="w-14" src={logo}  alt="icons" />
          <p className="text-3xl md:text-5xl mt-6 text-white">{focusTitle}</p>

          <p className="text-white text-sm pt-5 xl:text-base 2xl:pr-20">
            {focusPara1}
          
          </p>
          <br></br>
          <p className="text-white text-sm xl:text-base 2xl:pr-20">
           {focusPara2}
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Expectations;
