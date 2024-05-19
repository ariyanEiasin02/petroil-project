import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
const Big = () => {
    
  return (
    <>
        {/* <!-- backtotop part start --> */}
        <div>
            <ScrollToTop className='w-12 h-12 rounded-full bg-pramary fixed bottom-5 right-5' smooth component={<IoIosArrowUp className="text-white text-xl mx-auto"/>} />
        </div>
    </>
  )
}

export default Big

// const tui = document.querySelector(".tui")
// console.log(tui);
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// }