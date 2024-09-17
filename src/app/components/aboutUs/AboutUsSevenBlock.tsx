'use client'
import React, {useEffect, useState} from 'react';
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import Image from "next/image";
export const AboutUsSevenBlock = () => {
    const background = "#D987FF";
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/ourgoals/");
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
    if (!data) return <Loading/>;
    const {name, description} = data;
    console.log(data)
  const arr = [1, 2, 3];

  return (
    <section className='container p-[40px]'>
      <h2 className='text-[32px] lg:text-[54px] my-[40px] font-bold'>Our goals</h2>
      <div  className="grid lg:grid lg:grid-cols-2 md:flex md:flex-col justify-center items-center xl:grid-cols-3 gap-[30px] md:gap-10 grid-col-1">
      {arr.map(i => (
              <div key={i} className="w-[320px] md:w-[413px] h-[328px] rounded-[6px] border-[1px] border-[#FFFFFF] border-opacity-40 relative flex flex-col gap-2">
                <Image src={data.image} height={108} width={108} alt="Additional Image" className="z-[-1] absolute top-3 right-3"/>
                <div className='pl-[22px] pt-[59px] pr-[34px] pb-[41px] w-[337px] h-[178px]'>
                     <h3 className="font-raleway text-[24px] font-semibold z-20 ">{data.name}</h3>
                  <p className="font-raleway text-[18px] leading-[1.27rem] font-medium z-20 text-opacity-75">{data.description}</p>
                </div>
               
             </div>

      ))}
      </div>
    </section>
  );
};
