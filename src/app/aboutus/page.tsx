'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axiosInstance from '../utils/api';
import Loading from '../../../src/app/loading';


import { Header, Footer, AboutUsFirstBlock, AboutUsFourBlock, AboutUsSecondBlock, AboutUsThreeBlock, MainPageSevenBlock, MainPageThirdBlock, AboutUsSevenBlock, AboutUsSixBlock, MainPageSixBlock, MainPageEightBlock, MainPageTenBlock } from '../components';

export default function AboutUs() {
    const [data, setData] = useState<any>(null); // уточняем тип

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get("/aboutus/");
            return res.data;
        } catch (error) {
            console.error(error);
            return null; // возвращаем null, если произошла ошибка
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (data) setData(data.results); // проверяем, есть ли данные перед их использованием
        });
    }, []);

    if (!data) return <Loading />;

    return (
        <div>
            <Header />
            <AboutUsFirstBlock data={data} />
            <AboutUsSecondBlock data={data} />
            <div className="bg-[white] text-[black] h-[739px]">
                <AboutUsThreeBlock />
            </div>
            <AboutUsFourBlock data={data} />
            <MainPageSevenBlock />
            {/* <AboutUsAfterSixBlock /> */}
            <AboutUsSixBlock />
            <MainPageThirdBlock />
            <AboutUsSevenBlock />
            <MainPageSixBlock />
            <MainPageEightBlock />
            <MainPageTenBlock />
            <Footer />
        </div>
    );
}
