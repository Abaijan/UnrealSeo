import React from "react";

export const AboutUsFourBlock = ( data : any) => {
  return (
    <section className=" container  py-[100px] ">
      <div className="flex flex-col mt-[100px]">
        <div className="flex lg:flex-row flex-col gap-[40px] justify-between">
          <h2 className="font-raleway text-[40px] lg:text-[54px] leading-[45px] lg:leading-[4rem] z-20  font-bold">
           {data && data.data[0].name2}
          </h2>
          <span className="text-[18px] font-raleway  font-semibold  z-40">

          </span>
        </div>
        <div className="flex xl:flex-row flex-col justify-between mt-[150px]">
          <div className="mb-[50px] lg:mb-[40px] w-[380px] ">
            <div className="flex gap-5 flex-row lg:w-[521px] mb-[60px]">
              <span className=" text-[24px] font-semibold font-raleway ">
                01
              </span>
              <div>
                <h3 className=" text-[24px] font-semibold font-raleway mb-[20px]">
                  {data && data.data[0].name3}
                </h3>
                <p className="text-[16px] font-raleway  lg:font-semibold">
                  We improve our clients marketing results with a data driven
                  approach and we are hell-bent on making it awesome. Our goal
                  is to create a new,
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 lg:w-[521px] mb-[60px]">
              <span className="text-[24px] lg:font-semibold font-raleway ">
                02
              </span>
              <div>
                <h3 className="text-[24px] font-semibold font-raleway mb-[20px]">
                  {" "}
                  Our goal is to create
                </h3>
                <p className="text-[16px] font-raleway lg:font-semibold">
                  We improve our clients marketing results with a data driven
                  approach and we are hell-bent on making it awesome. Our goal
                  is to create 
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="ml-[10px] lg:w-[530px] lg:h-[580px]"
              src="/img/AboutUs-4img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
