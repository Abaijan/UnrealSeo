'use client';
import React, { useState, useEffect } from "react";
import {
    Header,
    Footer,
    ServicePageFirstBlock,
    ServicePageSecondBlock,
    ServicePageThirdBlock,
    ServicePageFourBlock,
    ServicePageFiveBlock,
    MainPageSixBlock,
    MainPageTenBlock,
} from "../components";
import axiosInstance from "../utils/api";
import Loading from "../loading";

interface ServiceInfo {
    id: number;
    quote: string;
    autor: string;
    image: string;
}

interface ServiceData {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default function Service() {
    const [data, setData] = useState<ServiceData[] | null>(null);
    const [datas, setDatas] = useState<ServiceInfo[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/banner_service/");
                setData(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchDatas = async () => {
            try {
                const res = await axiosInstance.get("/informationinpageservices/");
                setDatas(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDatas();
    }, []);

    if (!data || !datas) {
        return <Loading />;
    }
    console.log(data)
    return (
        <div>
                <section
                    style={{ backgroundImage: `url(${data[0]?.image})` }}
                    className='bg-cover bg-center bg-no-repeat h-[902px]'
                >
                    <Header />
                    <ServicePageFirstBlock data={data[0]} />
                </section>

            <ServicePageSecondBlock />
            <div className="bg-[white] text-[black]">
                <ServicePageThirdBlock data={datas} />
            </div>
            <div style={{ backgroundImage: `url(${datas[0]?.image})` }} className='grid-cols-2 bg-contain bg-start bg-no-repeat h-[420px] md:h-[631px] lg:h-[631px] xl:h-[631px] '>
                <ServicePageFourBlock />
            </div>
            <div className="bg-[white] text-[black]">
                <ServicePageFiveBlock />
            </div>
            <MainPageSixBlock />
            <MainPageTenBlock />
            <hr/>
            <Footer />
        </div>
    );
}
