/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = ({ footerItem }) => {
  const { intro, phone, address, email, copywright } = footerItem;

  return (
    <div>
      <div className='footersection py-12'>
{/* start footer parent Section */}
        <div className='grid grid-cols-2 md:grid-cols-6 item-center justify-center container mx-auto'>

          <div className="mt-10 text-center md:text-left col-span-2 md:grid-cols-1">
            <img
              className="w-48 pb-6  item-center justify-center container mx-auto"
              src="https://conoryst.sirv.com/WP_technohaat.tech/2020/06/t/e/d/techno-haat-logo-1-transparent-resized.png?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=300&h=0"
              alt=""
            />
            <p className="leading-7 font-medium text-white px-5 md:pl-8 lg:pl-16  xl:pl-28 2xl:pl-40">
              {intro}
            </p>

            <p className="text-2xl text-sky-500 font-medium pt-6 md:pl-8 lg:pl-16 xl:pl-28 2xl:pl-40">
              {phone}
            </p>
          </div>



          <div className="w-28 mt-10 md:pl-12  xl:pl-10 text-white item-center font-base justify-center container mx-auto">
            <h1 className="font-medium text-xl">ABOUT</h1>
            <p className="py-1 pt-7">
              <Link to='/home' className="hover:font-bold">Home</Link>
            </p>
            <p className="py-1">
            <Link to='/home' className="hover:font-bold">About Us</Link>              
            </p>
            <p className="py-1 ">
            <Link to='/home' className="hover:font-bold">Services</Link>
            </p>
            <p className="py-1">
            <Link to='/home' className="hover:font-bold">Projects</Link>
            </p>
            <p className="py-1">
            <Link to='/home' className="hover:font-bold">Blogs</Link>
            </p>
            <p className="py-1">
            <Link to='/home' className="hover:font-bold">Contact Us</Link>
            </p>
          </div>



          <div className="w-28 mt-10 xl:pl-16 md:pl-16 text-white item-center font-base justify-center container mx-auto">
            <h1 className="font-medium text-xl ">CONTACT</h1>
            <p className="py-1 pt-7 font-medium text-sky-500">
              <a>ADDRESS</a>
            </p>
            <p className="py-1 pr-3 md:pr-3 md:w-36 lg:w-60">
              <a> {address}</a>
            </p>

            <p className="py-1 pt-2 lg:pt-7 font-medium text-sky-500">
              <a>EMAIL</a>
            </p>
            <p className="py-1">
              <a>{email}</a>
            </p>
          </div>



          <div className="w-30 text-white col-span-2 md:grid-cols-1 text-center">
            <h1 className="font-medium mt-10 text-xl md:pl-6">FOLLOW</h1>
            <div className="mt-7 md:text-right md:pr-3 lg:text-center lg:pl-20  ">
              <a target="_blank" href='https://www.facebook.com/' className="icons text-xl p-2 border-4 facebook  rounded m-1 sm:border-1 sm:text-sm  fa-brands fa-square-facebook"></a>
              <a target="_balnk" href='https://www.facebook.com/' className="icons text-xl p-2 border-4   twitter rounded m-1 sm:border-1 sm:text-sm fa-brands fa-twitter"></a>
              <a target="_balnk" href='https://www.facebook.com/' className="icons text-xl p-2 border-4  instagram rounded m-1 sm:border-1 sm:text-sm fa-brands fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>



      <div className='bg-sky-500'>
        <div className='py-7'>
          <p className='text-white text-center font-sm'>
          &#169; {copywright}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;