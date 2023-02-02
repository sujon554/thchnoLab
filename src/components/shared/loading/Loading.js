import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="motherDiv h-[115vh] lg:h-[110vh] bg-sky-500">
     
      <div className="loadingBody">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="loadingText">Redirecting</h1>
      </div>
      
  
  );
};

export default Loading;
