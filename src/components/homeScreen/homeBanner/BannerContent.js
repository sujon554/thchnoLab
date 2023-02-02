import React, { useState } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const BannerContent = ({ bannerSlogan, bannerButtonName, bannerImages  }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;
  const bannerImagesLength = bannerImages.length - 1;
  let [counter, setCounter] = useState(0);

  const [image, setImage] = useState(bannerImages[0]);



  const prevImage = () => {
    if (counter === 0) {
      setCounter(bannerImages.length - 1);
      setImage(bannerImages[counter +1]);
    } else {
      setCounter(counter - 1);
      setImage(bannerImages[counter -1]);
    }
  };
  const nextImage = () => {
    if (counter < bannerImagesLength) {
      setCounter(counter + 1);
      setImage(bannerImages[counter +1]);
    } else {
    
       setCounter(0);
       setImage(bannerImages[0]);
    }
    
  };


  const bannerImageTag =[];
  bannerImages.map((item,index)=>{
    bannerImageTag.push( <><img src={item} className="w-full imageAppear h-[104.15vh] lg:h-[93.5vh]" alt="" /></>)
  })
 

  const onTouchStart = (e) => {
    console.log(e)
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextImage() : prevImage();
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {counter===0 && bannerImageTag[0]}
      {counter===1 && bannerImageTag[1]}
      {counter===2 && bannerImageTag[2]}
      {counter===3 && bannerImageTag[3]}
      
      
    
      <div className="absolute top-[40%] grid grid-cols-1 lg:grid-cols-6 lg:pl-10 px-1 ">
        <div className="col-span-2 md:px-24 lg:px-0 flex flex-col justify-center items-center lg:items-start  gap-5">
          <h2 className="banner-Slogan text-6xl text-center lg:text-6xl  lg:text-left">
            {parse(bannerSlogan)}
          </h2>

          <div className="pl-1 flex gap-3">
            {bannerButtonName.map((item, index) => (
              <Link key={index} to={item[1]} className="bannerBtn uppercase">
                {item[0]}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 pt-10 lg:pt-5 2xl:pt-10 pl-3">
            {bannerImages.map((item,index) => (
              counter === index ?<div key={index} className="border-4 border-white p-1" />:
              <div key={index} className="border-4 border-gray-400 p-1" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 "></div>

        <div className="hidden col-span-2 lg:flex flex-col gap-4 items-end justify-center lg:pr-24">
          <button className="arrowBtn" onClick={prevImage}>
            ❮
          </button>
          <button className="arrowBtn" onClick={nextImage}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
