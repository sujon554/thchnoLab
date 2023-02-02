import React from 'react';
import HomeService from '../../components/homeScreen/homeService/HomeService';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';
import useHomeServiceList from '../../hooks/useHomeServiceList.js';

const ServicePage = () => {
    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [homeServiceList, homeServiceLoading] = useHomeServiceList();
    const [footerItem, footerLoading] = useFooter();
    
   
    if(homeBannerLoading || homeServiceLoading || footerLoading){
        return <Loading/>
    }

   
    return (
        <>
        <NavBar homeBanner={homeBanner[0]} color={"white"}/>
        <HomeService homeServiceList={homeServiceList}/>
        <Footer footerItem={footerItem[0]}/>
        </>
    );
};

export default ServicePage;