import React from "react";
import HomeTeamCard from "../../components/homeScreen/homeTeamList/HomeTeamCard";
import Footer from "../../components/shared/footer/Footer";
import Loading from "../../components/shared/loading/Loading";
import NavBar from "../../components/shared/navBar/NavBar";
import useFooter from "../../hooks/useFooter";
import useHomeBanner from "../../hooks/useHomeBanner";
import useHomeTeamList from "../../hooks/useHomeTeamList";
import useTeamGallery from "../../hooks/useTeamGallery";
import TeamGallery from "./TeamGallery";

const TeamPage = () => {
  const [homeBanner, homeBannerLoading] = useHomeBanner();
  const [teamList, teamListLoading] = useHomeTeamList();
  const [gallery, galleryLoading] = useTeamGallery();
  const [footerItem, footerLoading] = useFooter();

  if (homeBannerLoading || teamListLoading || footerLoading || galleryLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar homeBanner={homeBanner[0]} color={"white"} />
      <TeamGallery  gallery={gallery[0]}/>

      <div className="container mx-auto setFont">
        <h2 className="text-center text-6xl font-bold pb-4">
          {teamList[0].title}
        </h2>
        <p className="text-center text-xl font-semibold">
          {teamList[0].slogan}
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-16  gap-4 lg:gap-5 px-4 xl:px-24 ">
        {teamList[0].team.map((item, index) => (
          <HomeTeamCard key={index} team={item} />
        ))}
      </div>

      <Footer footerItem={footerItem[0]} />
    </>
  );
};

export default TeamPage;
