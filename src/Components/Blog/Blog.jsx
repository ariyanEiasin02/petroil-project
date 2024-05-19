import React from 'react'
import blogOne from '../image/blog1.png'
import blogTwo from '../image/blog2.png'
import blogThree from '../image/blog3.png'
const Blog = () => {
  return (
    <>
        {/* <!-- BLOG PART START --> */}
    <section className="py-[48px] bg-[#F0F0F0]">
      <div className="max-w-container mx-auto">
        <div className="md:flex md:justify-between">
          <div style={{background :`url("${blogOne}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/3 w-full mr-[8px] rounded-lg">
            <div className="md:py-[130px] py-[100px] bg-[rgba(0,0,0,0.6)] pl-[40px] rounded-lg">
              <h4 className="font-poppins font-semibold md:text-3xl text-2xl text-white pb-[30px] md:w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
              <a className="md:py-[13px] py-[10px] bg-[#868381] text-center md:px-10 px-6 text-white font-bold text-base font-poppins hover:bg-violet-600 rounded-md" href="#">Read more</a>
            </div>
          </div>
          <div style={{background :`url("${blogTwo}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/3 w-full md:mt-0 mt-10 md:ml-6 ml-0 rounded-lg">
            <div className="md:py-[130px] py-[100px] bg-[rgba(0,0,0,0.6)] pl-[40px] rounded-lg">
              <h4 className="font-poppins font-semibold md:text-3xl text-2xl text-white pb-[30px] md:w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
              <a className="md:py-[13px] py-[10px] bg-[#868381] text-center md:px-10 px-6 text-white font-bold text-base font-poppins hover:bg-violet-600 rounded-md" href="#">Read more</a>
            </div>
          </div>
          <div style={{background :`url("${blogThree}")`,backgroundRepeat :"no-repeat", backgroundSize : "cover", backgroundPosition : "center" }} className="md:w-1/3 w-full mt-10 md:mt-0 md:ml-6 ml-0 rounded-lg">
            <div className="md:py-[130px] py-[100px] bg-[rgba(0,0,0,0.6)] pl-[40px] rounded-lg">
              <h4 className="font-poppins font-semibold md:text-3xl text-2xl text-white pb-[30px] md:w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
              <a className="md:py-[13px] py-[10px] bg-[#868381] text-center md:px-10 px-6 text-white font-bold text-base font-poppins hover:bg-violet-600 rounded-md" href="#">Read more</a>
            </div>
          </div>
        </div>
        <div className="text-end mt-4">
          <a className="font-bold font-poppins hover:text-red-500 " href="#">MORE FROM THE BLLOG <span><i className="fa-solid fa-angle-right"></i></span></a>
        </div>
      </div>
    </section>
    {/* <!-- BLOG PART END --> */}
    </>
  )
}

export default Blog