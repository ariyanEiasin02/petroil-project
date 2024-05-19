import React from 'react'
import bigOne from '../image/biggest1.png'
import bigTwo from '../image/biggest2.png'
import bigThree from '../image/biggest3.png'
import bigFour from '../image/biggest4.png'
const Country = () => {
  return (
    <>
        {/* <!-- COUNTRY PART START --> */}
    <section className="grid md:grid-cols-4 grid-cols-2 gap-4">
      <div className="">
        <img className="w-full" src={bigOne} alt="biggest"/>
      </div>
      <div className="">
        <img className="w-full" src={bigTwo} alt="biggest"/>
      </div>
      <div className="">
        <img className="w-full" src={bigThree} alt="biggest"/>
      </div>
      <div className="">
        <img className="w-full" src={bigFour} alt="biggest"/>
      </div>
    </section>
    {/* <!-- COUNTRY PART END --> */}
    </>
  )
}

export default Country