import React from "react";
import "./HomeService.css"

const HomeServiceCard = ({service}) => {
  return (
    <div className="w-11/12 xl:w-10/12 bg-white shadow-xl homeServiceCard">
      <figure className="px-10 pt-10 text-[#808186] text-8xl font-bold text-center cardHover">
      <i className={service.image}></i>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl uppercase ">{service.serviceTitle}</h2>
        <p className="text-justify text-xl text-[#808186]">{service.serviceDesc}</p>
        
        {/* <div className="card-actions pt-4">
          <button className="homeServiceButton py-3 px-6 uppercase">Read more</button>
        </div> */}

      </div>
    </div>
  );
};

export default HomeServiceCard;
