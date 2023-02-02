import React from "react";
import Footer from "../../components/shared/footer/Footer";
import Loading from "../../components/shared/loading/Loading";
import NavBar from "../../components/shared/navBar/NavBar";
import useFooter from "../../hooks/useFooter";
import useHomeBanner from "../../hooks/useHomeBanner";
import errorBanner from "../../resource/error/errorBanner.png";

const ErrorPage = () => {
  const [homeBanner, homeBannerLoading] = useHomeBanner();

  const [footerItem, footerLoading] = useFooter();

  if (homeBannerLoading || footerLoading) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar homeBanner={homeBanner[0]} color={"white"} />

      <div className="container px-5 mx-auto flex item-center justify-center h-[90vh] py-10">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={errorBanner} alt="" className="w-[80%]" />
          </div>
          <div>
            <h2 className="text-6xl text-center lg:8xl font-semibold ">
              It's just Error 404
            </h2>
          </div>
        </div>
      </div>

      <Footer footerItem={footerItem[0]} />
    </div>
  );
};

export default ErrorPage;
