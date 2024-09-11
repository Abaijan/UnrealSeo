import React from "react";

export const ServiceIdPageFirstBlock = () => {
  return (
    <section>
      <div className=" flex flex-col xl:flex-row xl:items-center w-[100vw] py-[30px] mt-[50px]">
        <img
          className="xl:w-[50%] z-10"
          src="/img/Mask group.png"
          alt=""
        />
        <div className="flex flex-col pl-3 items-start xl:justify-center text-start h-[100%]  xl:ml-[50px] xl:w-[40%]">
          <h3 className="font-raleway mt-3 xl:mt-0 text-[60px] leading-[60px] xl:text-[124px] xl:leading-[7rem] z-20 font-bold">
            3D motion ролики
          </h3>
          <span className="text-[18px] md:w-[500px] font-raleway mt-[67px] font-semibold mb-[32px] ml-[8%] z-20">
            We improve our clients marketing results with a data driven approach
            and we are hell-bent on making lorem hu
          </span>
          <button className=" pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#85FF01] font-bold font-raleway text-[18px] rounded-[10px] text-[black] ml-[8%]   z-20">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
};
