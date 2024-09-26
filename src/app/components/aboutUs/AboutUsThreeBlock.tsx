'use client'
import React, { useEffect, useState } from "react";
import axiosInstance from '../../utils/api';
import Image from 'next/image';
export const AboutUsThreeBlock = () => {
  const [data, setData] = useState<any>(null); // тип данных можно уточнить, если известен

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/statistic/");
      return res.data?.results || null; // возвращаем null, если нет данных
    } catch (error) {
      console.error(error);
      return null; // возвращаем null в случае ошибки
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      if (data && data.length > 0) {
        setData(data[0]);
      }
    });
  }, []);

  if (!data) return <div>Loading...</div>; // показываем лоадер, пока данные загружаются

  return (
      <section className="container relative">
        <div className="flex flex-col xl:flex-row items-start">
          <Image
              width={500}
              height={500}
              className="absolute top-[130vw] left-[30vw] md:top-[30vw] md:w-[60vw] md:left-[30vw] w-[50vw] z-[0] xl:relative xl:rotate-0 xl:top-0 lg:top-[30vw] lg:left-[30vw] xl:left-0 xl:mt-[10vw]"
              src={data.image}
              alt="Statistics Image"
          />
          <div className="flex flex-col w-[40vw]">
            <div className="z-[2] flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">
              клиентов
            </span>
              <span className="font-raleway font-semibold text-[100px]">
              {data.clients}+
            </span>
              <hr />
            </div>
            <div className="z-[2] flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">
              лет на рынке
            </span>
              <span className="font-raleway font-semibold text-[100px]">
              {data.on_market}+
            </span>
              <hr />
            </div>
            <div className="z-[2] flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">
              проектов
            </span>
              <span className="font-raleway font-semibold text-[100px]">
              {data.projects}+
            </span>
              <hr />
            </div>
          </div>
        </div>
      </section>
  );
};
