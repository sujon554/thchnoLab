import React, { useState } from "react";
import ImageShow from "./ImageShow";
import "./TeamGallery.css";

const TeamGallery = ({ gallery }) => {
  const [galleryImgCount, setCount] = useState(7);
  const [galleryInitialCount, setInitialCount] = useState(0);
  const imgLen = gallery.images.length;

  const handelNextButton = () => {
    setInitialCount(galleryInitialCount + 7);
    setCount(galleryImgCount + 7);
  };
  const handelPreviousButton = () => {
    setInitialCount(galleryInitialCount - 7);
    setCount(galleryImgCount - 7);
  };

  return (
    <div className="container mx-auto py-20 setFont">
      <h2 className="text-center text-7xl font-bold pb-4">{gallery.title}</h2>
      <p className="text-center text-xl font-semibold">{gallery.slogan}</p>

      <div className="flex justify-center py-5">
        <div className=" w-[20%]  border-2 border-sky-500" />
      </div>

      <div className="pt-10 columns-2 md:columns-3 lg:columns-4 px-4">
        {gallery.images
          .slice(galleryInitialCount, galleryImgCount)
          .map((item, index) => (
            <ImageShow key={index} index={index} image={item} />
          ))}
      </div>

      <div className="flex justify-center items-center pt-10">
        {galleryInitialCount <= 0 || galleryImgCount > imgLen ? (
          <div > 
            {galleryInitialCount > 0 && (
              <button
                type="button"
                className="changeButton w-[100px] lg:w-[200px]"
                onClick={handelPreviousButton}
              >
                Previous
              </button>
            )}
            {galleryImgCount < imgLen && (
              <button
                type="button"
                className="changeButton w-[100px]  lg:w-[200px]"
                onClick={handelNextButton}
              >
                Next
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2  justify-items-center gap-5 py-6 lg:w-[50%]">
          {galleryInitialCount > 0 ? (
            <button
              type="button"
              className="changeButton w-[100px]  lg:w-[200px] "
              onClick={handelPreviousButton}
            >
              Previous
            </button>
          ) : (
            <div />
          )}
          {galleryImgCount < imgLen && (
            <button
              type="button"
              className="changeButton w-[100px]  lg:w-[200px]"
              onClick={handelNextButton}
            >
              Next
            </button>
          )}
        </div>
        )}
       
      </div>
    </div>
  );
};

export default TeamGallery;
