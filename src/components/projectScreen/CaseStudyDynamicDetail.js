import React from "react";

const CaseStudyDynamicDetail = ({ detail,right }) => {

  return (
    <>
      {detail.image ? (
        right % 2 === 0?
        <>
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-2xl font-bold">{detail.title}</h2>
            <p className="text-justify text-lg">{detail.paragraph}</p>
          </div>
          <div className="col-span-12 lg:col-span-5  lg:pt-10  ">
            <img src={detail.image} alt="" />
          </div>
        </>
        :
        <>
        <div className="col-span-12 lg:col-span-5  lg:pt-10  ">
          <img src={detail.image} alt="" />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-justify text-lg">{detail.paragraph}</p>
        </div>
      </>
      ) : (
        <div className="col-span-12">
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-justify text-lg">{detail.paragraph}</p>
        </div>
      )}
    </>
  );
};

export default CaseStudyDynamicDetail;
