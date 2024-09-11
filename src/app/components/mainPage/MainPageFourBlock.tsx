'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                const res = await axios.get('http://178.253.42.15/api/quoteonmainpage/');
                setData(res.data.results[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="h-[701px] lg:h-[1021px] container relative">
            <div className="flex flex-col items-end text-end pt-[100px]">
                <h3 className="font-raleway text-[40px] lg:text-[80px] leading-[47px] lg:leading-[5rem] z-20 font-bold text-end">
                    {data?.description}
                </h3>
            </div>

            <div className="absolute z-20 top-[495px] md:top-[250px] left-[0] lg:top-[40.2%] w-[30vw] h-[50vw] lg:left-[0%]">
                <img src={data?.image} alt="Quote" />
            </div>
            <div className="absolute z-20 top-[556px] md:top-[380px] left-[30vw] lg:left-[35vw] lg:top-[65.7%] w-[20vw] xl:top-[50%] h-[20vw] lg:left-[20%]">
                <img src={data?.image} alt="Quote" />
            </div>
            <div className="absolute z-20 top-[560px] md:top-[425px] md:left-[73vw] rotate-45 md:left-[60vw] xl:top-[47%] lg:top-[50.7%] lg:left-[70vw] left-[70vw] lg:top-[67%] w-[20vw] h-[20vw] lg:left-[50%]">
                <img src={data?.image} alt="Quote" />
            </div>
        </section>
    );
};
