'use client';

import React, { useEffect, useState } from 'react';
import { PartnerCard } from '../../ui';
import axiosInstance from '../../utils/api';

export const MainPageSevenBlock = () => {
    const [data, setData] = useState<any[]>([]); // Replace `any` with a more specific type if possible

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get('/partners/');
            return res.data.results;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (data) setData(data);
        });
    }, []);

    return (
        <section className="container h-auto mt-[100px] mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 font-raleway text-start mb-[50px]">
                <h2 className="text-[32px] lg:text-[54px] font-bold">Our partners</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((i) => (
                    <PartnerCard key={i.id} data={i} />
                ))}
            </div>
        </section>
    );
};
