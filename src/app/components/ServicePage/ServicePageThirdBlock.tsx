'use client';
import React, {useEffect, useState} from 'react'
import axiosInstance from "../../utils/api";
import Loading from "../../loading";

interface ServiceInfo {
    id: number;
    quote: string;
    autor: string;
    image: string;
}


export const ServicePageThirdBlock: React.FC<{data: ServiceInfo[] | null}> = ({data}) => {

    if (!data) {
        return <Loading />;
    }
  return (
    <section className=' container flex flex-col justify-center items-center h-[500px]'>
      <div className='flex flex-col items-center justify-center text-center px-5 lg:w-[900px]'>
        <p className='md:text-[26px] lg:text-[34px] font-semibold italic'>{data[0].quote}</p>
        
        <span className='pt-[40px] mt-[40px] border-t border-[black] w-[270px]'>{data[0].autor}</span>
      </div>
          
    </section>
  )
}
