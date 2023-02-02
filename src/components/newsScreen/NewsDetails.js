import React from 'react';
import './News.css';

const NewsDetails = ({ newsDetails }) => {

    const { date, category, title, img, mainDescription, mainDescriptionTitle, description } = newsDetails;


    return (
        <>

            <div className='container w-[90vw] lg:w-[70vw] xl:w-[60vw] newsDetails mx-auto px-5 py-10'>

                <img className=' mx-auto' src={img} alt="" />
                <p className='text-4xl py-10 uppercase '>{title}</p>
                <p className='text-2xl font-semibold'>Category: {category}</p>
                <p className='text-lg text-[#44B0FD] pb-5'>Dated: {date}</p>
                <hr />
                
                <p className='text-2xl font-semibold pt-10 '>{mainDescriptionTitle}</p>
                <p className='text-xl pt-4 text-justify'>{mainDescription}</p>

                {
                    description.map(extendtedNew => (
                        <div className='text-justify'>
                            <p className='text-2xl font-semibold pt-10 pb-5 '>{extendtedNew?.descriptionTitle}</p>
                            <p className='text-xl'>{extendtedNew?.paragraph}</p>
                            <img className='w-[90vw] md:w-[65vw] lg:w-[50vw] xl:w-[35vw] mx-auto py-4' src={extendtedNew?.img}></img>

                        </div>
                    )

                    )
                }


            </div>
        </>
    );
};

export default NewsDetails;