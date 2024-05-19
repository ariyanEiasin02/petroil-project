import React from 'react'
import logoOne from '../image/Logo1.png'
import logoTwo from '../image/Logo2.png'
import logoThree from '../image/Logo3.png'
import logoFour from '../image/Logo4.png'
const Icons = () => {
  return (
    <>
        {/* <!-- ICONIMG PART START --> */}
    <section className="py-[48px] bg-white">
      <div className="max-w-container mx-auto">        
        <div className="flex flex-wrap justify-center">
            <div className="md:w-1/4 w-2/4">
              <img src={logoOne} alt="logo1"/>
            </div>
            <div className="md:w-1/4 w-2/4">
              <img src={logoTwo} alt="logo2"/>
            </div>
            <div className="md:w-1/4 w-2/4 mt-10 md:mt-0">
              <img src={logoThree} alt="logo3"/>
            </div>
            <div className="md:w-1/4 w-2/4 mt-10 md:mt-0">
              <img src={logoFour} alt="logo4"/>
            </div>
        </div>
      </div>
    </section>
    {/* <!-- ICONIMG PART END --> */}
    </>
  )
}

export default Icons