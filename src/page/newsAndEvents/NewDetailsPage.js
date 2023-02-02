import React from 'react';
import { useParams } from 'react-router-dom';
import NewsDetails from '../../components/newsScreen/NewsDetails';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';
import useSpecificNews from '../../hooks/useSpecificNews';

const NewDetailsPage = () => {
    let { key } = useParams();
    key = key.replaceAll("-", ' ');
    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [newsDetails, newsLoading] = useSpecificNews(key);
    const [footerItem, footerLoading] = useFooter();

    if (homeBannerLoading || newsLoading || footerLoading) {
        return <Loading />
    }


    return (
        <>
            <NavBar homeBanner={homeBanner[0]} color={"white"} />
            <NewsDetails newsDetails={newsDetails} />
            <Footer footerItem={footerItem[0]} />
        </>
    );
};

export default NewDetailsPage;