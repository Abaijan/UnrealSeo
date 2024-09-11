import React from "react";

export const AboutUsFirstBlock = () => {
  return (
    <section className=" container">
      <div className="flex flex-col xl:flex-row items-center  mt-[50px]">
        <img
          className="lg:w-[738px]  h-[350px] lg:h-[600px]"
          src="/img/AboutUs-first-img.png"
          alt=""
        />
        <div className="flex flex-col items-start justify-center text-start h-[100%] xl:mt-0 mt-[50px] xl:ml-[50px]">
          <h3 className="font-raleway text-[40px] xl:text-[54px] leading-[48px] xl:leading-[4rem] z-20 font-bold">
            “We are passionate about creating visually stunning"
          </h3>
          <span className=" text-[16px] xl:text-[20px] font-raleway mt-[42px] mb-[62px]  z-20">
            We improve our clients marketing results with a<br /> data driven
            approach and we are hell-bent on <br />
            making
          </span>
          <button className=" pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#D987FF] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
};
