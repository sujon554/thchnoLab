import React from 'react';
import HomeContacts from '../../components/homeScreen/homeContacts/HomeContacts';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';

const ContactPage = () => {
    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [footerItem, footerLoading] = useFooter();   

    if(homeBannerLoading ||  footerLoading ){
        return <Loading/>
    }
   
    return (
        <>
        <NavBar homeBanner={homeBanner[0]} color={'white'}/>
        <HomeContacts/>
        <Footer footerItem={footerItem[0]}/>  

        </>
    );
};

export default ContactPage;