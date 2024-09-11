"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const PortfolioPageThirdBlock = () => {
  const slides = [1, 2, 3, 4, 5,6,7];
  const weight = slides.length * 400;

  return (
    <section className='container py-[100px]'>
       <div className='  font-raleway text-start mb-[50px]'>
            <h2 className='text-[30px] md:w-[60%] ml-3 lg:text-[54px] font-bold'>“We are passionate about creating visually stunningare passionate about creating </h2>
        </div>
        <div className='px-[20px] h-[600px] scroll-y-none overflow-auto xl:w-[1400px] lg:w-[950px] md:w-[650px]'>
          <div className='flex gap-[40px]' style={{ width : weight + 'px'}}>
          {
          slides.map(slide => (
            <div key={slide} className='h-[400px] w-[400px] flex flex-col text-start'>
              <img className='h-[400px] w-[400px] ' src="/img/slider-team-img.png" alt="" />
            </div>
          ))
        }

          </div>
        </div>
     
    </section>
   
  );
};
