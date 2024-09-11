import React from "react";

export const ServicePageFirstBlock = () => {
  return (
    <section className=" container xl:pl-[40px] mt-[100px] mb-[100px]">
      <div className="xl:w-[1280px] h-[544px]  font-raleway flex justify-center items-start  flex-col   text-start gap-3">
        <div className="mb-[20px] md:w-auto w-[360px]">
          <h2 className="text-[48px] md:text-[70px] lg:text-[100px] lg:leading-[100px] xl:text-[124px] font-raleway font-bold leading-[48px]  xl:leading-[6rem] ">
            Как мы можем помочь вашему бизнесу?
          </h2>
        </div>

        <button className="mt-[5%] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </div>
    </section>
  );
};
