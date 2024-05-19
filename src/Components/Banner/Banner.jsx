import React from 'react'
import banner from "../image/banner.png"

const Banner = () => {
  return (
    <div>
        {/* <!-- BANNER PART START --> */}
    <section style={{background :`url("${banner}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="relative">
        <div className="h-full w-full bg-[rgba(0,0,0,0.6)] md:py-64 py-36">
        <div className="max-w-container mx-auto">
            <div>
                <div className="">
                  <h1 className="text-white text-[34px] md:text-[64px] font-bold font-poppins mb-11 md:pl-0 pl-10">We exist since 1975 <br/> on the oil and gas industry.</h1>
                </div>
                <a className="py-[13px] bg-pramary text-center md:px-10 px-6 text-white font-bold md:text-base text-sm font-poppins ml-10 md:ml-0 hover:bg-violet-600 rounded-md" href="#">LEARN MORE</a>
            </div>
        </div>
        </div>
    </section>
    {/* <!-- BANNER PART END --> */}
    </div>
  )
}

export default Banner