import React from "react";
import { Link } from "react-router-dom";
import "./HomeProject.css";

const HomeProjectCard = ({ project }) => {
  const projectLink = `/projects/${project.projectTitle.replaceAll(' ','-')}`; 
  return (
    <Link to={projectLink} className=" bg-base-100 shadow projectCard" >
      <div className="flex">
        <div className="liveLinkRibbon">
          <a
            target="__blank"
            href={project.projectLink}
            className="liveLink text-2xl"
          >
            {project.projectTitle}
          </a>
        </div>

        <div className="">
          <figure>
            <img src={project.image} className="object-cover h-[500px]" alt="Shoes" />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default HomeProjectCard;
