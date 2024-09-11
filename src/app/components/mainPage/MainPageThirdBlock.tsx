'use client'
import React, { useEffect, useState } from "react";
import axiosInstance from '../../utils/api';

// Define a type for the item
interface Item {
    id: string;
    name: string;
    image: string;
}

export const MainPageThirdBlock = () => {
    const [data, setData] = useState<Item[]>([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get("/whatwedooffer");
            return res.data.results;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (data) setData(data);
        });
    }, []);

    return (
        <section className="space-y-4 p-4 container pt-[50px]">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-gray-400"/> {/* Add background color */}
                <span className="font-raleway font-medium text-[18px]">◯ что мы предлагаем</span>
            </div>
            <div className="space-y-4 pt-20">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col content-left gap-[30px] items-start lg:flex-row lg:items-center justify-between border-b pb-4"
                        >
                            <span className="text-[24px] md:text-[34px] font-semibold">{item.name}</span>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[630px] lg:h-[180px] rounded-[10px] object-cover"
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Optionally handle empty state or loading
                )}
            </div>
        </section>
    );
};
