import React from 'react'
import serviceOne from '../image/services1.png'
import serviceTwo from '../image/services2.png'
import serviceThree from '../image/services3.png'
const Services = () => {
  return (
    <>
     {/* <!-- SERVICES PART START --> */}
    <section className="md:flex md:flex-wrap pt-[40px] md:items-center md:justify-between">
      <div className="md:w-1/2 w-full text-left md:text-center items-center mb-6 md:mb-0 px-10 md:px-0">
        <h2 className="font-bold font-poppins md:text-5xl text-4xl py-4 md:py-2">Our Services</h2>
        <p className="font-poppins text-base mx-auto md:w-[405px] text-[#6C6C6C] w-full">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div style={{background :`url("${serviceOne}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/2 w-full">
        <div className="py-[150px] bg-[rgba(0,0,0,0.6)] text-center">
          <h3 className="md:text-2xl text-xl text-white font-bold font-poppins text-center mb-[30px]">Modern natural oil and gas refineries.</h3>
          <a className="md:py-[13px] py-[10px] bg-pramary text-center md:px-10 px-6 text-white font-bold md:text-base text-sm font-poppins hover:bg-violet-600 mx-[50px] rounded-md" href="#">Learn More</a>
        </div>
      </div>
      <div style={{background :`url("${serviceTwo}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/2 w-full mt-10 md:mt-0">
        <div className="py-[150px] bg-[rgba(0,0,0,0.6)] text-center">
          <h3 className="md:text-2xl text-xl text-white font-bold font-poppins text-center mb-[30px]">Supply of national industries.</h3>
          <a className="md:py-[13px] py-[10px] bg-pramary text-center md:px-10 px-6 text-white font-bold md:text-base text-sm font-poppins hover:bg-violet-600 mx-[50px] rounded-md" href="#">Learn More</a>
        </div>
      </div>
      <div style={{background :`url("${serviceThree}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/2 w-full mt-10 md:mt-0">
        <div className="py-[150px] bg-[rgba(0,0,0,0.6)] text-center">
          <h3 className="md:text-2xl text-xl text-white font-bold font-poppins text-center mb-[30px] pr-[5px]">National fuel distribution and supply.</h3>
          <a className="md:py-[13px] py-[10px] bg-pramary text-center md:px-10 px-6 text-white font-bold md:text-base text-sm font-poppins hover:bg-violet-600 mx-[50px] rounded-md" href="#" >Learn More</a>
        </div>
      </div>
    </section>
    {/* <!-- SERVICES PART END --> */}
    </>
  )
}

export default Services