import React from "react";
import useNewAndEvents from "../../hooks/useNewAndEvents";

import useFooter from "../../hooks/useFooter";
import Footer from "../../components/shared/footer/Footer";
import Loading from "../../components/shared/loading/Loading";
import News from "../../components/newsScreen/News";
import NavBar from "../../components/shared/navBar/NavBar";
import useHomeBanner from "../../hooks/useHomeBanner";

const NewsPage = () => {
  const [newsList, newsLoading] = useNewAndEvents();
  const [homeBanner, homeBannerLoading] = useHomeBanner();
  const [footerItem, footerLoading] = useFooter();

  if (homeBannerLoading || newsLoading || footerLoading) {
    return <Loading />;
  }


  return (
    <div>
      <NavBar homeBanner={homeBanner[0]} color={"white"} />
      <div className="bg-[#f9f9f9]">
      <div className="">
        {newsList.map((newsItem, index) => (
          <News key={index} newsItem={newsItem}></News>
        ))}
      </div>
      </div>

      <Footer footerItem={footerItem[0]} />
    </div>
  );
};

export default NewsPage;
