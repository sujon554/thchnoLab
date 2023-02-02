
import React from "react";

import { Link } from "react-router-dom";

import './News.css'

const NewsCard = ({ items }) => {



  const { date, category, title } = items;
  const newsLink = `/news/${title.replaceAll(' ', '-')}`;
  return (
    <>
      <Link to={newsLink}>


        <div className="NewEventsCards h-64 bg-white p-5 border-r-4 border-[#44B0FD] transition delay-100">
          <p className="text-lg pb-5 ">{date}
            <span className=" inline align-top float-right ">{category}</span></p>
          <a
            herf={title}
            className="text-xl py-10 font-semibold uppercase">{title.slice(0, 70)}</a>
          <p className="py-5">Read more <i className="pl-2 fa-solid fa-arrow-right-long "></i></p>
        </div>


      </Link>



    </>



  );
};

export default NewsCard;
