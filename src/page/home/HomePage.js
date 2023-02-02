import React from 'react';
import HomeBanner from '../../components/homeScreen/homeBanner/HomeBanner';
import HomeProjectsSection from '../../components/homeScreen/homeProjects/HomeProjectsSection';
import Expectations from '../../components/homeScreen/homeExpectation/Expectations';
import HomeService from '../../components/homeScreen/homeService/HomeService';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import HomeAbout from "../../components/homeScreen/homeAbout/HomeAbout";
import useExpectation from '../../hooks/useExpectation';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';
import useHomeProjectList from '../../hooks/useProjectList';
import useHomeServiceList from '../../hooks/useHomeServiceList.js';
import useHomeTeamList from '../../hooks/useHomeTeamList';
import HomeTeamList from '../../components/homeScreen/homeTeamList/HomeTeamList';
import useHomeClients from '../../hooks/useHomeClients';
import useHomeAbout from "../../hooks/useHomeAbout";
import HomeClients from '../../components/homeScreen/homeClients/HomeClients';
import HomeContacts from '../../components/homeScreen/homeContacts/HomeContacts';


const HomePage = () => {

    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [homeAboutList, aboutLoading] = useHomeAbout();
    const [homeServiceList, homeServiceLoading] = useHomeServiceList();
    const [homeProjectList, projectLoading] = useHomeProjectList();
    const [teamList, teamListLoading] = useHomeTeamList();
    const [homeClientList, clientLoading] = useHomeClients();
    const [expectation, expectationLoading] = useExpectation();
    const [footerItem, footerLoading] = useFooter();
    
   

    if(homeBannerLoading || homeServiceLoading || projectLoading || teamListLoading || clientLoading || expectationLoading || footerLoading || aboutLoading){

        return <Loading/>
    }

   
    return (
        <>
     
        <NavBar homeBanner={homeBanner[0]}/>
        <HomeBanner homeBanner={homeBanner[0]}/>
        <HomeAbout homeAboutList={homeAboutList[0]} />       
        <HomeService homeServiceList={homeServiceList}/>
        <HomeProjectsSection homeProjectList={homeProjectList[0]}/>
        <HomeTeamList teamList={teamList[0]}/>
        <HomeClients homeClientList={homeClientList[0]} />
        <Expectations expectation={expectation[0]}/>
        <HomeContacts/>
        <Footer footerItem={footerItem[0]}/>  

        </>
    );
};

export default HomePage;