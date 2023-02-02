import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const SideNavBar = ({ navRoutes, navOn, switchSideNav }) => {

  return (
    <div className={navOn ? "sideNavBarOn ml-0 w-[100vw] h-[100vh]" : "sideNavBarOf"}>
      {navOn && (
        <div>
          <div className="flex justify-end p-2">
            <button className=" text-2xl  bgClose" onClick={switchSideNav}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="sideNavRoute text-xl">
            {navRoutes.map((item, index) => (
              <li key={index} className="notActivePhone">
                <i className={item[0]}></i>
                <Link to={item[2]} className="uppercase">{item[1]}</Link>
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
