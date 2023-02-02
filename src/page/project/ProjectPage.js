import React from 'react';
import ProjectList from '../../components/projectScreen/ProjectList';
import Footer from '../../components/shared/footer/Footer';
import Loading from '../../components/shared/loading/Loading';
import NavBar from '../../components/shared/navBar/NavBar';
import useFooter from '../../hooks/useFooter';
import useHomeBanner from '../../hooks/useHomeBanner';
import useHomeProjectList from '../../hooks/useProjectList';

const ProjectPage = () => {
    const [homeBanner, homeBannerLoading] = useHomeBanner();
    const [homeProjectList, projectLoading] = useHomeProjectList();
    const [footerItem, footerLoading] = useFooter();
    
   
    if(homeBannerLoading || projectLoading ||  footerLoading){
        return <Loading/>
    }

   
    return (
        <div>
        <NavBar homeBanner={homeBanner[0]} color={'white'}/>
        <div className='container mx-auto'>
        <ProjectList projectList={homeProjectList[0].projectList} />            
        </div>

        <Footer footerItem={footerItem[0]}/>

        </div>
    );
};

export default ProjectPage;