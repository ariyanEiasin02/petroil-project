import React, { useState, useEffect } from 'react';
import { PuffLoader } from 'react-spinners';

const Spinner = () => {
    const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Simulating API call delay
    setTimeout(() => {
      setData('');
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
        
        {loading ? (
            <div className="w-full fixed  min-h-screen bg-[#EBE4F9] z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className='text-black font-bold font-poppins text-3xl uppercase text-center'>Loading...</h1>
                <PuffLoader color="#F40404" size={100} cssOverride={{margin : "30px"}}/>
            </div>
        </div>
          ) : (
            <div>
              <p>{data}</p>
            </div>
          )}
    </div>
  )
}

export default Spinner