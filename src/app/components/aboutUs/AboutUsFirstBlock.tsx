import React from "react";
import Image from "next/image";
export const AboutUsFirstBlock = ( data : any) => {
  const item = data && data.data[0]
  return (
    <section className=" container">
      <div className="flex xl:flex-row flex-col  items-center  mt-[50px]">
        <Image
          width={700}
          height={700}
          className="lg:w-[638px]  h-[350px] lg:h-[600px]"
          src={item && item.image}
          alt="unreal kg"
        />
        <div className="flex flex-col items-start justify-center text-start h-[100%] xl:mt-0 mt-[50px] xl:ml-[50px]">
          <h3 className="font-raleway text-[40px] xl:text-[54px] leading-[48px] xl:leading-[4rem] z-20 font-bold">
            {item && item.name}
          </h3>
          <span className=" text-[16px] xl:text-[20px] font-raleway mt-[42px] mb-[62px]  z-20">
           {item && item.description}
          </span>
          <button className=" pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#D987FF] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
};
