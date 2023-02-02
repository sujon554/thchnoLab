import React from "react";
import './HomeClients.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeClients = ({ homeClientList }) => {
  const { sectionName, sectionSlogan, clientsList } = homeClientList;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#F3F3F3] py-10 lg:py-28 pb-16">
       <div className=" py-1 clientsScreen container w-4/6 mx-auto">
        <p className="text-center text-xl uppercase text-sky-600 font-semibold py-4 pt-5">
          {sectionName}
        </p>
        <p className="text-center text-6xl  pb-16">
          {sectionSlogan}
        </p>

        <Slider {...settings}>
          {clientsList.map((items, index) => (
            <div key={index} className="px-2 xl:mx-0 md:container">
              <img
                className="bg-[#F3F3F3] w-56 h-56 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={items.image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      
    </div>
      
    </div>
   
  );
};

export default HomeClients;
