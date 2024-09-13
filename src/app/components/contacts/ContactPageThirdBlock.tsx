'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/api';


export const ContactPageThirdBlock =() => {
   const [expanded, setExpanded] = useState<number | null>(0);
   const [data, setData] = useState<any[]>([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axiosInstance.get('/faq/');
         setData(response.data.results);
       } catch (error) {
         console.log('Error fetching data:', error);
       }
     };

     fetchData();
   }, []);
    console.log(data)

  const toggleSection = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };


  return (
    <section className=' container font-raleway my-[40px]'>
      <div className=" text-white flex flex-col lg:flex-row justify-between pl-[10px]">
      <h2 className="text-[54px] font-bold ">Curious to know more?</h2>
      <div className='lg:w-[630px]'>
         {data.map((item) => (
        <div key={item.id} className="border-b m-[20px]">
          <button
            onClick={() => toggleSection(item.id)}
            className="flex justify-between w-full py-4 text-left text-[18px] md:text-[24px]   focus:outline-none"
          >
            {item.question}
            <span
              className={`transform transition-transform ${
                expanded === item.id ? "rotate-180" : ""
              }`}
            >
              {expanded === item.id ? "↑" : "↓"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded === item.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pt-[42px] pb-[36px] w-[522px]">
              <p className="text-[18px] font-semibold leading-relaxed whitespace-pre-wrap text-[gray] opacity-75">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
     
    </div>
     </section>
  )
}
