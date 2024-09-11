'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api';
import Link from 'next/link';
import Loading from '../../loading';

// Типизация данных
interface StatisticData {
  clients: number;
  on_market: number;
  projects: number;
}

interface AboutUsData {
  name: string;
  description: string;
}

export const MainPageSecondBlock = () => {
  const [statisticData, setStatisticData] = useState<StatisticData | null>(null);
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statRes, aboutRes] = await Promise.all([
          axiosInstance.get('/statistic/'),
          axiosInstance.get('/aboutus/')
        ]);

        setStatisticData(statRes.data.results[0]);
        setAboutUsData(aboutRes.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!statisticData || !aboutUsData) return <Loading />;

  return (
      <section className="container flex flex-col lg:flex-row justify-between h-[100%] pb-[50px] lg:h-[800px] px-[30px] lg:px-0 mt-[40px]">
        <div className="flex flex-col items-start lg:ml-[50px] lg:mt-[100px] text-start justify-start h-[100%]">
          <div className="flex items-center">
          <span className="pb-[30px] font-raleway text-[18px] font-medium">
            ◯ о нас
          </span>
          </div>
          <h3 className="md:w-[630px] font-raleway text-[40px] leading-[47px] lg:text-[54px] lg:leading-[4rem] z-20 font-bold">
            {aboutUsData.name}
          </h3>
          <span className="md:w-[630px] text-[16px] font-raleway mt-[24px] mb-[52px] z-20">
          {aboutUsData.description}
        </span>
          <Link href="/aboutus">
            <button className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[18px] rounded-[10px] text-[black] z-20">
              Подробнее
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full lg:w-[40vw] mt-[30px] md:mt-0">
          <div className="flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">клиентов</span>
            <span className="font-raleway font-semibold text-[100px]">{statisticData.clients}+</span>
            <hr />
          </div>
          <div className="flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">лет на рынке</span>
            <span className="font-raleway font-semibold text-[100px]">{statisticData.on_market}+</span>
            <hr />
          </div>
          <div className="flex flex-col mt-[40px]">
            <span className="font-raleway font-semibold text-[18px]">проектов</span>
            <span className="font-raleway font-semibold text-[100px]">{statisticData.projects}+</span>
            <hr />
          </div>
        </div>
      </section>
  );
};
