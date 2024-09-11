import React from "react";
import Link from 'next/link';
export const ServicePageSecondBlock = () => {
  const array = [1, 2, 3];
  return (
    <section className="container md:px-[40px]">
      <div>
        <h2 className="font-raleway text-[54px] font-bold mt-[100px] mb-[38px]">
          Our services
        </h2>
        {array.map((i) => (
          <div
            key={i}
            className={`font-raleway mb-[130px] relative  md:flex flex-col  items-end justify-between ${
              i % 2 === 0
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
          >
            <span className="text-[70px] xl:text-[180px] text-[white] text-opacity-[8%] text-center  absolute inset-0 flex justify-center items-start z-10">
              3D motion
            </span>
            <img
              className="md:w-[320px] lg:w-[50%] relative z-20"
              src="/img/ServicePageImg.svg"
              alt=""
            />
            <div className="relative flex flex-col mt-[30px] gap-3 z-20 xl:w-[522px]">
              <span className="font-semibold text-[24px] mb-[16px]">
                3D motion ролики
              </span>
              <p className="font-semibold text-[14px] w-[350px] xl:text-[18px] text-opacity-18 mb-[50px]">
                We improve our clients marketing results with a data driven
                approach and we are hell-bent on making it awesome. Our goal is
                to create a new, data oriented quality of e-commerce experience
                by leveraging powerful real-time analytics.
              </p>
              <button className="font-semibold text-[18px] w-[130px] rounded-[100px] text-[#FF00F5] border-[2px] pt-[8px] pb-[8px] pr-[43px] pl-[43px] text-center border-[#FF00F5]">
                <Link href={`service/` + [i]}>
                More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
