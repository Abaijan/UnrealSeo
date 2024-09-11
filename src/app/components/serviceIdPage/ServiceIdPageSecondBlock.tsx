
import React from 'react';

export const ServiceIdPageSecondBlock = () => {
  const arr = [1, 2, 3];

  return (
    <section className='container lg:px-[30px] font-raleway'>
      <h2 className='text-[54px] font-bold mb-[56px] mt-[93px]'>Об услуге</h2>
      <div  className="grid xl:grid-cols-3 gap-10  lg:grid-cols-2 items-center grid-cols-1">
      {arr.map(i => (
              <div key={i} className="md:w-[413px] w-[350px] h-[256px] rounded-[6px] border-[1px] border-[#FFFFFF] border-opacity-40 relative flex flex-col gap-2">
                <div className='pl-[22px] pt-[34px] pr-[34px] pb-[41px] h-[178px]'>
                     <h3 className="font-raleway text-[24px] font-semibold pb-[12px] w-[70%] z-20 ">Our goal is to create goal is to</h3>
                  <p className="font-raleway text-[18px] leading-[1.27rem] font-medium z-20 text-opacity-75">We improve our clients marketing results with a data driven approach and we are hell-bent on making it awesome with a data driven approach </p>
                </div>
             </div>

      ))}
      </div>
    </section>
  );
};
