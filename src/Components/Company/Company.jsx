import React from 'react'
import tamim from '../image/compnay.png'
const Company = () => {
  return (
    <>
        {/* <!-- COMPANY PART START --> */}
    <section className="py-[48px] bg-[#F0F0F0]">
      <div className="max-w-container mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-[30%] w-full pt-[45px] pb-[45px] md:pt-[121px] md:pb-[120px] items-center bg-pramary text-center">
            <h3 className="text-white font-bold font-poppins text-4xl md:w-[262px] text-center md:ml-[65px]">Learn more about our company</h3>
          </div>
        <div style={{background :`url("${tamim}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-[70%] w-full py-[168px] bg-compnay bg-no-repeat bg-cover text-center">
          <a className="md:py-[13px] py-[10px] bg-white text-center md:px-10 px-6 text-pramary font-bold text-base font-poppins hover:bg-violet-600 rounded-md" href="#">Learn More</a>
        </div>
        </div>
      </div>
    </section>
    {/* <!-- COMPANY PART END --> */}
    </>
  )
}

export default Company