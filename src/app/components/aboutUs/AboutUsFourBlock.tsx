'use client';
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/api";
import Loading from "../..//loading";
import Image from 'next/image';

export const AboutUsFourBlock = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/lovework/");
        return res.data;
      } catch (error) {
        console.error(error);
        return null; // возвращаем null, если произошла ошибка
      }
    };

    fetchData().then((data) => {
      if (data) setData(data.results[0]); // проверяем, есть ли данные перед их использованием
    });
  }, []);

  if (!data) return <Loading />;
console.log(data)
  return (
    <section className=" container px-[40px]  py-[100px] ">
      <div className="flex flex-col mt-[100px]">
        <div className="flex lg:flex-row  flex-col gap-[30px] justify-between">
          <h2 className="font-raleway  text-[20px] lg:text-[54px] lg:w-[800px] leading-[35px] md:leading:[5rem] lg:leading-[4rem] z-20  font-bold">
            {data.name}
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col justify-between mt-[150px]">
          <div className="mb-[50px] lg:mb-[40px] max-w-[380px] ">
            <div className="flex gap-5 flex-row xl:w-[521px] lg:max-w-[521px] mb-[60px]">
              <span className=" text-[24px] font-semibold font-raleway ">
                01
              </span>
              <div>
                <h3 className=" text-[24px] font-semibold font-raleway mb-[20px]">
                  How we love work
                </h3>
                <p className="text-[16px] font-raleway  lg:font-semibold">
                  {data.description1}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 xl:w-[521px] lg:max-w-[521px] mb-[60px]">
              <span className="text-[24px] lg:font-semibold font-raleway ">
                02
              </span>
              <div>
                <h3 className="text-[24px] font-semibold font-raleway mb-[20px]">
                  {" "}
                  Our goal is to create
                </h3>
                <p className="text-[16px] font-raleway lg:font-semibold">
                  {data.description2}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              width={700}
              height={400}
              className="ml-[10px] lg:w-[530px] lg:h-[580px]"
              src={data.image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
