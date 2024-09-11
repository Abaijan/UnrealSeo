'use client';
import React, { useEffect, useState } from 'react';
 import axiosInstance from '../../utils/api';
import Link from 'next/link';
import Loading from '../../loading';

// Типизация данных
interface MainPageData {
    image: string;
    name: string;
    description: string;
}

export const MainPageFirstBlock = () => {
    const [data, setData] = useState<MainPageData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/mainpage/1/');
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <Loading />;
    }

    return (
        <section className='relative md:pb-[300px]'>
            <div className='absolute md:top-[-3%] md:left-[85%] lg:top-[-7%] top-[1%] left-[65%] lg:left-[90%] z-10'>
                <img className='w-[100%] h-[100%] rotate-180' src={data.image} alt="mainPhoto" />
            </div>
            <div className='absolute md:left-[-10%] md:top-[30%] left-[-90%] md:w-[80%] md:h-[80%] lg:left-auto lg:top-[20%] top-[10%] z-40'>
                <img src={data.image} alt="mainPhoto" />
            </div>
            <div className='absolute md:hidden overflow-hidden left-[-60%] w-[60%] h-[60%] origin-center rotate-90 top-[-20%] lg:left-auto lg:top-auto z-40'>
                <img src={data.image} alt="mainPhoto" />
            </div>

            <div className='container h-[970px]'>
                <div className='flex flex-col items-end text-right h-[100%] md:px-[40px] md:gap-[20px] pt-[200px] lg:pt-[200px]'>
                    <h3 className='font-raleway h-[123px] lg:h-auto text-[32px] md:text-[60px] lg:px-[40px] lg:text-[80px] leading-[2rem] md:leading-[3.5rem] lg:leading-[5rem] z-20 font-bold'>
                        {data.name}
                    </h3>
                    <span className='text-[16px] md:text-[20px] font-raleway md:mt-[42px] md:w-[50%] lg:px-[40px] mb-[62px] lg:w-auto z-20'>
            {data.description}
          </span>
                    <Link href="/contacts">
                        <button
                            type="button"
                            className='pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#84FF00] font-bold lg:px-[40px] lg:font-bold font-raleway text-[12px] lg:text-[18px] w-[191px] h-[55px] lg:w-auto lg:h-auto rounded-[10px] text-[black] z-20'
                        >
                            ОСТАВИТЬ
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
