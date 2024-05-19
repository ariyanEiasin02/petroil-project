import React, { useEffect, useState } from 'react'
import logo from '../image/Logo.png'
import { IoMdMenu,IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [show,setShow] = useState(false)
  return (
    <>
    {/* <!-- NAVBAR PART START --> */}
    <nav className="p-5 bg-pramary shadow">
      <div className="max-w-container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl mx-2">
            <img className="md:h-10 h-6 inline"src={logo} alt="logo"/>
          </span>
          <span onClick={()=> setShow(!show)}>
            {
                show ? <i className='text-white text-2xl block md:hidden'><IoMdClose/></i> : <i className='text-white text-2xl block md:hidden'><IoMdMenu/></i>
            }
          </span>
        </div>
        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute md:bg-pramary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${show ? 'top-[194px] bg-white opacity-100 z-10' : '-top-340'}`}>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="md:text-white text-black text-base font-semibold duration-500 font-poppins ">Home</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="md:text-white text-black text-base font-semibold duration-500 font-poppins ">About</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="md:text-white text-black text-base font-semibold duration-500 font-poppins ">Services</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="md:text-white text-black text-base font-semibold duration-500 font-poppins ">Gallery</a>
          </li>
          <li className="ml-4 my-6 md:my-0">
            <a className="md:text-white text-black text-base font-semibold border-2 px-6 py-2 font-poppins" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* <!-- NAVBAR PART END --> */}
    </>
  )
}

export default Navbar

function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[168px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[168px]'),list.classList.remove('opacity-100'))
  }