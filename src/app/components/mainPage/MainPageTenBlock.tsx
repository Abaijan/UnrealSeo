import React from 'react'
import Link from "next/link";
export const MainPageTenBlock =() => {
  return (
    <section className='container py-[40px] lg:py-0 '>
      
            <div className='flex flex-row justify-between items-center mt-[100px]'>
                <div className='flex  w-[70%] lg:pl-[60px] flex-col md:gap-[40px] items-start justify-center'>
                    <h2 className='text-[32px] md:text-[40px] lg:text-[80px] font-raleway font-extrabold leading-[39px] md:leading-[3rem] lg:leading-[5rem]'>Готовы начать работу с нами?</h2>
                    <Link href="/contacts">
                        <button
                            className='mt-[30px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20'>Оставить
                            заявку
                        </button>
                    </Link>

                </div>
                <div className=' w-[30%] lg:w-auto items-end '>
                    <img src="/img/img-ten.png" className='w-[134px] md:w-[150px] lg:w-[351px] ' alt="" />
                </div>
            </div>

    </section>
  )
}
