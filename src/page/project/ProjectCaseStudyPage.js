import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudy from '../../components/projectScreen/CaseStudy';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';
import useSpecificProject from '../../hooks/useSpecificProject';

const ProjectCaseStudyPage = () => {
    let { key } = useParams();
    key =key.replaceAll("-",' ');
    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [project, projectLoading] =useSpecificProject(key);
    const [footerItem, footerLoading] = useFooter();  
   
    if(homeBannerLoading || projectLoading ||  footerLoading){
        return <Loading/>
    }

    return (
        <>
        <NavBar homeBanner={homeBanner[0]} color={"white"}/>
        <CaseStudy project={project}/>
        <Footer footerItem={footerItem[0]}/>
            
        </>
    );
};

export default ProjectCaseStudyPage;