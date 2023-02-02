import React from "react";
import "./HomeBanner.css";
import BannerSideBar from "./BannerSideBar";
import BannerContent from "./BannerContent";

const HomeBanner = ({ homeBanner }) => {
  const {
    sideBarTitle,
    sideBarLinks,
    phoneNumber,
    email,
    bannerSlogan,
    bannerButtonName,
    bannerImages
  } = homeBanner;


  return (
    <div id="home" className=" mt-[-175px] lg:mt-[-80px] h-[115.5vh]  md:h-[101.2vh] bannerBg">
      <div className="flex pt-[75px]">
        <BannerSideBar
          sideBarTitle={sideBarTitle}
          sideBarLinks={sideBarLinks}
          phoneNumber={phoneNumber}
          email={email}
        />

        <div className="w-full h-[85.8vh] 2xl:h-[90vh]">
          <div>
            <BannerContent bannerSlogan={bannerSlogan} bannerButtonName={bannerButtonName} bannerImages={bannerImages} />           

          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeBanner;