import React from 'react';
import HomeProjectCard from '../homeScreen/homeProjects/HomeProjectCard';

const ProjectList = ({projectList}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-16  gap-4 lg:gap-4 ">
          { projectList.map((item,index)=><HomeProjectCard key={index} project={item}/>)}
        </div>
    );
};

export default ProjectList;