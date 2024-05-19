import React from 'react'
import { CgMail } from "react-icons/cg";
import {FaPhoneAlt,FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <>
        {/* <!-- HEADER PART START --> */}
    <section className="bg-[#282828] pt-4 pb-[17px] border-b-2 border-[#FFB800]">
        <div className="max-w-container mx-auto">
            <div className="md:flex font-poppins font-normal">
                <div className="w=full md:w-1/2 md:flex md:justify-normal justify-between px-10 md:px-0">
                   <div className="flex items-center pr-[17px]">
                        <i className="fa-regular fa-envelope text-white md:text-xl text:base"><CgMail/></i>
                        <p className="text-white md:text-base text:base pl-[5px]">mail@yourcompany.com</p>
                   </div>
                   <div className="flex items-center relative md:pl-[17px] after:content-[''] after:absolute after:left-[-9px] 
                   md:after:left-0 after:top-0 after:h-full after:w-px after:hidden md:after:block after:bg-[#5C6A92]">
                        <i className="fa-solid fa-phone text-white mt-2 md:mt-0 md:text-xs text:xl"><FaPhoneAlt/></i>
                        <p className="text-white mt-2 md:mt-0 text:base pl-[5px]">+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="md:w-1/2 md:text-end flex md:justify-end md:mt-0 mt-4">
                    <a href="#" className="text-white text-lg pl-10 md:pl-0">
                        <i><FaFacebookF/></i>
                    </a>
                    <a href="#" className="text-white text-lg pl-4">
                        <i ><FaTwitter /></i>
                    </a>
                    <a href="#" className="text-white text-lg pl-4">
                        <i><FaLinkedin/></i>
                    </a>
                    <a href="#" className="text-white text-lg pl-4">
                        <i><FaInstagram /></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- HEADER PART END --> */}
    </>
  )
}

export default Header