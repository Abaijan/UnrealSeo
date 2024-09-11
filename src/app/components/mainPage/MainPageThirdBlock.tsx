'use client'
import {useEffect, useState} from "react";
import axios from "axios";

export const MainPageThirdBlock = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("http://178.253.42.15/api/whatwedooffer").catch((error) => {
            console.log(error);
        });
        return await res.data.results
    };

    useEffect(() => {
        fetchData().then((data) => setData(data));
    }, []);
    return (
        <section className="space-y-4 p-4 container pt-[50px]">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full"/>
                <span className="font-raleway font-medium text-[18px]">◯ что мы предлагаем</span>
            </div>
            <div className="space-y-4 pt-20">
                {data && data.map((item: any) => (
                    <div key={item.id}
                        className="flex flex-col content-left gap-[30px] items-start lg:flex-row lg:items-center
                        justify-between border-b pb-4">
                        <span className="text-[24px] md:text-[34px] font-semibold">{item.name}</span>
                        <img src={item.image} alt={`${item.name}`} className="w-[630px] lg:h-[180px] rounded-[10px]"/>
                    </div>
                ))}
                    </div>
                    </section>
                    )
                }