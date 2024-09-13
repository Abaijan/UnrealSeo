
'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import { Header, ServiceIdPageFirstBlock,ServiceIdPageSecondBlock,ServiceIdPageThirdBlock,Footer, ServicePageFiveBlock,MainPageSixBlock,MainPageTenBlock } from "../../components";
import { useRouter } from 'next/navigation';
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import { usePathname } from 'next/navigation';

interface ServiceData {
    id: number;
    name: string;
    services: any;
    description: string;
    image: string;
}
export default function ServiceId  () {
        const router = useRouter();
        const [data, setData] = useState<any>(null);
        const pathName = usePathname();
        const serviceId = pathName.split("/")[2];


        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axiosInstance.get(`/ourservices/${serviceId}/`);
                    setData(res.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }, []);
        if (!data) {
            return (
                <Loading/>
            );
        }
        console.log(data)

return(
    <>
        <Header />
        <ServiceIdPageFirstBlock data={data}/>
        <ServiceIdPageSecondBlock data={data.services}/>
        <section className=' bg-[url("/img/32.png")] bg-contain bg-no-repeat bg-bottom'>
        <ServiceIdPageThirdBlock/>
        </section>
        <section className='text-[black] bg-[white]'>
             <ServicePageFiveBlock/>
        </section>
        <MainPageSixBlock/>
        <MainPageTenBlock/>
        <hr/>
        <Footer/>
    </>
)
}