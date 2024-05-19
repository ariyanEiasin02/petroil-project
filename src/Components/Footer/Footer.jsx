import React from 'react'
import footerLogo from '../image/footer.png'
import footerLogoOne from '../image/Cert1.png'
import footerLogoTwo from '../image/Cert2.png'
import { CgMail } from "react-icons/cg";
import {FaPhoneAlt} from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
const Footer = () => {
  return (
    <>
         {/* <!-- FOOTER PART START --> */}
    <section className="py-[40px] bg-black">
      <div className="max-w-container mx-auto">
       <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="pl-10 md:pl-0">
          <div className="mt-10">
            <img className="h-10" src={footerLogo} alt="footer"/>
          </div>
          <div className="flex items-center mt-8">
            <i className="text-white text-base"><CgMail/></i>
            <p className="text-white text-xs pl-[5px]">mail@yourcompany.com</p>
          </div>
          <div className="flex items-center mt-4">
            <i className="text-white text-base"><FaPhoneAlt/></i>
            <p className="text-white text-xs pl-[5px]">+896 120 5889 (Toll free)</p>
          </div>
          <div className="flex items-center mt-4">
            <i className="text-white text-base"><SlLocationPin/></i>
            <p className="text-white text-xs pl-[5px]">101 Baker Street, New York, USA, 12345</p>
          </div>
          <div className="mt-6 md:initial flex">
            <a className="" href="#">
              <i className="fa-brands fa-facebook-f text-white text-base w-10 h-10 text-center leading-[40px] rounded-[50%] bg-pramary hover:bg-red-400"></i>
          </a>
          <a className="pl-4" href="#">
              <i className="fa-brands fa-twitter text-white text-base w-10 h-10 text-center leading-[40px] rounded-[50%] bg-pramary hover:bg-red-400"></i>
          </a>
          <a className="pl-4" href="#">
              <i className="fa-brands fa-linkedin text-white text-base w-10 h-10 text-center leading-[40px] rounded-[50%] bg-pramary hover:bg-red-400"></i>
          </a>
          <a className="pl-4" href="#">
              <i className="fa-brands fa-instagram text-white text-base w-10 h-10 text-center leading-[40px] rounded-[50%] bg-pramary hover:bg-red-400"></i>
          </a>
          </div>
        </div>
        <div className="pl-10 md:pl-0">
          <div className="pt-10">
            <h3 className="text-white font-poppins font-bold text-2xl">Company</h3>
          </div>
          <div className="text-white mt-4">
            <ul>
              <li className="pt-4">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Home</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">About</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Services</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-10 md:pl-0">
          <div className="md:pt-10 pt-2">
            <h3 className="text-white font-poppins font-bold text-2xl">Others</h3>
          </div>
          <div className="text-white mt-4">
            <ul>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Blog</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Contact</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Terms & Conditions</a>
              </li>
              <li className="md:pt-4 pt-2">
                <a className="font-normal font-poppins md:text-base text-sm" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-10 md:pl-0">
          <div className="md:pt-10 pt-2">
            <h3 className="text-white font-poppins font-bold text-2xl">Certificate</h3>
          </div>
          <div className="text-white mt-4 md:flex justify-between">
            <img src={footerLogoOne} alt=""/>
            <img className="mt-6 md:mt-0" src={footerLogoTwo} alt=""/>
          </div>
        </div>
       </div>
      </div>
    </section>
    {/* <!-- FOOTER PART END -->
    <!-- FOOTERLAST PART END --> */}
    <section className="bg-[#282828] py-4">
      <div className="max-w-container mx-auto">
        <p className="text-base text-white font-poppins font-normal pl-10 md:pl-0">© Copyright 2022 by AltDesain Studio – All right reserved.</p>
      </div>
    </section>
    {/* <!-- FOOTERLAST PART END --> */}
    </>
  )
}

export default Footer