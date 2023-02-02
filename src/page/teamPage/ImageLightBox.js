import React from 'react';

const ImageLightBox = ({image,index}) => {
    return (
        <div>
      <input type="checkbox" id={index} className="modal-toggle p-0" />
      <label htmlFor={index} className="modal cursor-pointer p-0">
        <label className="modal-box rounded-md p-0 " htmlFor="">
        <label htmlFor={index} className="text-xl cursor-pointer absolute right-5 top-4 text-white text-bold">✕</label>
         <img src={image} alt="gallery" className='max-h-[80vh]'/>        
        </label>
      </label>
    </div>
    );
};

export default ImageLightBox;