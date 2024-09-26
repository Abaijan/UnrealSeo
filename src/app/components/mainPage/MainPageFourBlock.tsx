'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api';
import Image from "next/image";

// Типизация данных
interface QuoteData {
    description: string;
    image: string;
}

export const MainPageFourBlock = () => {
    const [data, setData] = useState<QuoteData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/quoteonmainpage/');
                setData(res.data.results[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="h-[500px] md:h-[701px] lg:h-[1021px] xl:h-[1151px]   md:px-[40px] container relative">
            <div className="flex flex-col items-end text-end pt-[100px]">
                <h3 className="font-raleway text-[24px] mt-[30px] md:mt-0 md:text-[40px] lg:text-[80px] md:leading-[47px] leading-[27px] lg:leading-[5rem] z-20 font-bold text-end">
                    {data?.description}
                </h3>
            </div>

            <div className="absolute z-20 top-[285px] md:top-[250px] left-[0] lg:top-[40.2%] w-[30vw] h-[50vw] lg:left-[0%]">
                {data?.image ? <Image  width={580} height={580} src={data?.image} alt="Quote" /> : null}
            </div>
            <div className="absolute z-20 top-[356px] md:top-[380px] left-[30vw] lg:left-[35vw] lg:top-[65.7%]  w-[20vw] xl:top-[670px] h-[20vw] lg:left-[20%]">
                {data?.image ? <Image width='580' height='580'  src={data?.image} alt="Quote" /> : null}
            </div>
            <div className="absolute z-20 top-[360px] md:top-[425px] md:left-[73vw] rotate-45 md:left-[60vw] xl:top-[650px] lg:top-[50.7%] lg:left-[70vw] left-[70vw] lg:top-[67%] w-[20vw] h-[20vw] lg:left-[50%]">
                {data?.image ? <Image width='580' height='580' src={data?.image} alt="Quote" /> : null}
            </div>
        </section>
    );
};
