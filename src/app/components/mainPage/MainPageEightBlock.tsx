'use client';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api';
import Link from 'next/link';

// Типизация данных
interface ProjectCostData {
    image: string;
    name: string;
    description: string;
}

export const MainPageEightBlock = () => {
    const [data, setData] = useState<ProjectCostData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get('/projectcost/1/');
            setData(res.data);
        } catch (error) {
            console.error('Error fetching project cost data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className="container md:mb-[100px] flex justify-center items-center">
            <div
                style={{ backgroundImage: `url(${data?.image})` }}
                className={`w-[1280px] h-[300px] md:h-[544px] bg-no-repeat bg-contain bg-center font-raleway flex justify-center items-center flex-col text-center gap-3`}
            >
                <div className="mb-[20px]">
                    <h2 className="text-[22px] lg:text-[60px] xl:text-[86px] font-raleway font-extrabold lg:leading-[6rem]">
                        {data?.name}
                    </h2>
                    <span className="text-[12px] lg:text-[24px]">
            {data?.description}
          </span>
                </div>
                <Link href="/contacts">
                    <button className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[12px] lg:text-[18px] rounded-[10px] text-[black] z-20">
                        рассчитать
                    </button>
                </Link>
            </div>
        </section>
    );
};
