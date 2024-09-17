'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import Image from 'next/image';

interface News {
    id: number;
    name: string;
    description: string;
    image: string;
}


export  const  News = () => {

    const [data, setData] = useState<News[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/news/");
                setData(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <Loading />;
    }

    return (
        <section className="font-raleway container">
            <div className='  font-raleway text-start mb-[40px] mt-[100px]  '>
                <h2 className='text-[30px] md:w-[60%] ml-3 lg:text-[54px] font-bold'>Новости  </h2>
            </div>

            <div
                className='px-[20px] lg:h-[300px] h-[300px] scroll-y-none overflow-scroll  '>
                <div className='flex text-start gap-[40px]' >
                    {
                        data.map(news => (
                            <div key={news.id} className='min-h-[200px] min-w-[200px]  max-h-[300px] w-[200px]  lg:min-w-[400px]  text-start'>
                        <Image
                            src={news.image}
                            alt="our team "
                            width={500}
                            height={500}
                        />
                        <p className='lg:text-[24px] font-raleway font-bold text-[12px] visible'>{news.name}</p>
                        <p className='lg:text-[8px] opasity-[0.5]  font-raleway text-[6px] font-semibold '>{news.description}</p>
                    </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}