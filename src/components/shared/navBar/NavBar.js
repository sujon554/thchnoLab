import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import SideNavBar from "./SideNavBar";

const NavBar = ({homeBanner,color}) => {
  
  const [navOn,setNavOn] =useState(false)
  const [navBar, setNavBar] = useState(false);
  const navRoutes = [
    ["home","/home"],
    ["our projects","/projects"],
    ["our Team","/teams"],
    ["blogs","/news"],
    ["contact us","/contact"],
  ];
  const navRoutesWithIcon = [
    ["fa-solid fa-house","home","/home"],
    ["fa-brands fa-product-hunt","our projects","/projects"],
    ["fa-solid fa-people-group","our teams","/teams"],
    ["fa-regular fa-newspaper","blogs","/news"],
    ["fa-solid fa-address-card","contact us","/contact"],
  ];

  const switchSideNav=()=>{
    setNavOn(!navOn);
   }

   const changeBgScroll = () => {
    if (window.scrollY >= 50) {
        setNavBar(true)
    } else {
        setNavBar(false);
    }
}
window.addEventListener('scroll', changeBgScroll);
const navBarStyleBase = color==='white'? "py-3  sticky top-0 z-50 bg-black" : "py-3  sticky top-0 z-50 ";
const navBarStyleWithColor = "py-3  sticky top-0 z-50 bg-black";


  return (
    <div  className={navBar?navBarStyleWithColor:navBarStyleBase}>       
      <div className="xl:container mx-auto  lg:px-4">
        <div className="flex justify-between items-center ">

          {/* mobile viwe navbar */}
          
          <div className="dropdown navbar-end lg:hidden">
          <SideNavBar navRoutes={navRoutesWithIcon} navOn={navOn} switchSideNav={switchSideNav} homeBanner={homeBanner}/>          
            <button className="btn glass ml-4 hover:bg-[#55b4f365] lg:hidden" onClick={switchSideNav}>
              <i className="fa-solid fa-bars text-xl  text-gray-50"></i>
            </button>           
          </div> 
          

          {/* logo link for mobile view */}
          <NavLink to="/home" className="navbar-end lg:hidden flex justify-end mr-4">
          <img
            src="https://conoryst.sirv.com/WP_technohaat.tech/2020/06/t/e/d/techno-haat-logo-1-transparent-resized.png?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=300&h=0"
            className="w-[75%] sm:w-[50%]"
            alt=""
          />
        </NavLink>

          
        </div>

        <div className="hidden flex flex-row  items-center lg:flex justify-between text-white text-lg font-bold">

          {/* Logo link for desktop view           */}
          <NavLink to="/home" className="hidden lg:block">
            <img
              src="https://conoryst.sirv.com/WP_technohaat.tech/2020/06/t/e/d/techno-haat-logo-1-transparent-resized.png?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=300&h=0"
              className="w-[75%]"
              alt=""
            />
          </NavLink>
          
          {/* desktop view navbar */}
          <div className="menu menu-horizontal justify-items-center ">
            {navRoutes.map((item,index) => (
              <li key={index} className="notActive text-sm">
                <NavLink to={item[1]} className="uppercase">{item[0]}</NavLink>
              </li>
            ))}
          </div>
          
        </div>

        
      </div>
    </div>
  );
};

export default NavBar;