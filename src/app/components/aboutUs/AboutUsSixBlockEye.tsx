'use client';
import {useState, useEffect} from "react";
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import React from "react";
import Image from "next/image";

export const AboutUsSixBlockEye = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/aboutus/");
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

    return (
        <section className="container lg:pb-[200px]">
            <section className="flex relative flex-col gap-[40px] lg:flex-row min-h-screen">
                <div className="relative flex items-center justify-center w-full lg:w-[847px] h-[40vh] lg:h-[847px] bg-black text-white">
                    <Image
                        src={data.image2}
                        alt="Eye and Moon"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />
                </div>

                <div className="relative translate-y-[-50%] lg:translate-y-0   flex items-center justify-center lg:absolute  lg:top-0 lg:left-2/3 top-0 left-1/2 lg:w-[30%] w-[50%] md:w-[30%] h-[40vh] lg:h-[847px] text-white">
                    <Image
                        src={data.image3}
                        alt="Additional Image"
                        layout="fill"
                        objectFit="cover"
                    />
                    <p className='absolute text-[black]  left-[5%] top-[3%] font-bold text-[12px] lg:text-[18px] w-[85%] font-raleway'>
                        {data.description}
                    </p>
                </div>

                <h2 className=' translate-y-[-250%] lg:absolute top-[50%] left-[30%] font-bold w-full  text-[34px] lg:w-[60%] font-raleway'>
                    {data.name}
                </h2>
            </section>
        </section>


    );
};
