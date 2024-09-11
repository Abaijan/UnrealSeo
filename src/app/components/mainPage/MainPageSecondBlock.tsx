'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
export const MainPageSecondBlock = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://178.253.42.15/api/statistic/").catch((error) => {
      console.log(error);
    });
    return await res.data.results
  };

  useEffect(() => {
    fetchData().then((data) => setData(data[0]));
  }, []);
  return (
    <section className="container flex flex-col lg:flex-row justify-between h-[100%] pb-[50px] lg:h-[800px] px-[30px] lg:px-0  mt-[40px] ">
      <div className="flex flex-col items-start lg:ml-[50px] lg:mt-[100px]  text-start justify-start  h-[100%]"> 
        <div className="flex items-center">
          <span className="pb-[30px]font-raleway text-[18px] font-medium">
            ◯ о нас
          </span>
        </div>
        <h3 className="md:w-[630px] font-raleway text-[40px]   leading-[47px]lg:text-[54px] lg:leading-[4rem] z-20  font-bold">
          “We are passionate  about creating visually
            stunning{" "}
        </h3>
        <span className=" md:w-[630px] text-[16px] font-raleway mt-[24px] mb-[52px]  z-20">
          We improve our clients marketing results with a data driven approach
          and we are hell-bent on making it awesome. Our goal is to
          create a 
          new, data oriented quality of e-comerce experience by leveraging{" "}
         
          powerful real-time analytics.
        </span>
        <Link href="/aboutus">
          <button
              className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black]  z-20">
            Подробнее
          </button>
        </Link>

      </div>
      <div className="flex flex-col w-full lg:w-[40vw] mt-[30px] md:mt-0">
        <div className="flex flex-col mt-[40px] ">
          <span className="font-raleway font-semibold text-[18px]">
            клиентов
          </span>
          <span className="font-raleway font-semibold text-[100px]">{data && data.clients}+</span>
          <hr />
        </div>
        <div className="flex flex-col  mt-[40px]">
          <span className="font-raleway font-semibold text-[18px]">
            лет на рынке
          </span>
          <span className="font-raleway font-semibold text-[100px]">{data && data.on_market}+</span>
          <hr />
        </div>
        <div className="flex flex-col  mt-[40px]">
          <span className="font-raleway font-semibold text-[18px]">
            проектов
          </span>
          <span className="font-raleway font-semibold text-[100px]">{data && data.projects}+</span>
          <hr />
        </div>
      </div>
    </section>
  );
};
