import React from 'react';

export const AboutUsSevenBlock = () => {
  const arr = [1, 2, 3];

  return (
    <section className='container p-[40px]'>
      <h2 className='text-[32px] lg:text-[54px] my-[40px] font-bold'>Our goals</h2>
      <div  className="grid lg:grid lg:grid-cols-2 md:flex md:flex-col justify-center items-center xl:grid-cols-3 gap-[30px] md:gap-10 grid-col-1">
      {arr.map(i => (
              <div key={i} className="w-[370px] md:w-[413px] h-[328px] rounded-[6px] border-[1px] border-[#FFFFFF] border-opacity-40 relative flex flex-col gap-2">
                <img className='absolute z-10 top-[0px] right-[20px]' src="/img/AboutUs-Seven.svg" alt="" />
                <div className='pl-[22px] pt-[109px] pr-[34px] pb-[41px] w-[337px] h-[178px]'>
                     <h3 className="font-raleway text-[24px] font-semibold z-20 ">Our goal is to create goal is to</h3>
                  <p className="font-raleway text-[18px] leading-[1.27rem] font-medium z-20 text-opacity-75">We improve our clients marketing results with a data driven approach and we are hell-bent on making it awesome with a data driven approach </p>
                </div>
               
             </div>

      ))}
      </div>
    </section>
  );
};
