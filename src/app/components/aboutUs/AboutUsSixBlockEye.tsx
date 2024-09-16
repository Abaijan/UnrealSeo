'use client';
import {useState, useEffect} from "react";
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import React from "react";
import Image from "next/image";

export const AboutUsSixBlockEye = () => {
    const background = "#D987FF";
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
        <section className="container pb-[200px]">

            <section className="flex relative flex-col gap-[40px] lg:flex-row min-h-screen">
                <div className="relative flex items-center justify-center  max-h-[847px] w-[847px]  bg-black text-white">
                    <Image
                        src={data.image2}
                        alt="Eye and Moon"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-80"
                    />

                </div>
                <div className="relative flex items-center justify-beteen max-h-[847px] w-[30%] text-white">
                    <Image layout="fill"
                           src={data.image3}
                           alt="Eye and Moon"
                           objectFit="cover"
                    />
                    <p className='absolute text-[black] left-[5%] top-[3%] font-bold text-[18px] w-[85%] font-raleway'>{data.description}</p>

                </div>
                <h2 className='absolute top-[50%] left-[30%] font-bold text-[54px] w-[60%] font-raleway'>{data.name}</h2>
            </section>

        </section>
    );
};
