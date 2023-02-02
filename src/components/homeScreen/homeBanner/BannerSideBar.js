import React from "react";

const BannerSideBar = ({ sideBarTitle, sideBarLinks, phoneNumber, email }) => {
  return (
    <div className="hidden lg:inline-flex w-[80px] 2xl:w-[106px] h-[93.5vh] bg-[#55B4F3] flex flex-col justify-between py-5 ml-16">
      <div className="flex flex-col items-center gap-2 ">
        <h2 className="bannerTitle uppercase text-white text-xs 2xl:text-xl">
          {sideBarTitle}
        </h2>
        <span className="bannerTitle h-[30px] border-white border-2 "></span>
      </div>

      <div className="flex flex-col items-center text-white text-xl gap-3">
        {sideBarLinks.map((item, index) => (
          <a key={index} target="__blank" href={item[1]}>
            <i className={item[0]}></i>
          </a>
        ))}

        <div>
          <a href={`tel:${phoneNumber}`}>
            <i className="fa-solid fa-phone phone"></i>
          </a>
        </div>
        <div>
          <a href={`mailto:${email}`}>
            <i className="fa-solid fa-envelope email"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSideBar;
