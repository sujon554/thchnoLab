import React from 'react';
import ImageLightBox from './ImageLightBox';

const ImageShow = ({index,image}) => {
    return (
        <div  key={index} className="imageWrap mb-4"> <label  htmlFor={index} > <img  alt="galleryImage" className=" zoom" src={image} /></label> <ImageLightBox image={image} index={index}/></div>
    );
};

export default ImageShow;