'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import ServiceCard from '../../ui/ServiceCard/ServiceCard';
import axiosInstance from "../../utils/api";
import Loading from "../../loading";

interface Service {
    id: number;
    name: string;
    services: any;
    description: string;
    image: string;
}

export const ServicePageSecondBlock: React.FC = () => {
    const [data, setData] = useState<Service[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/ourservices/");
                setData(res.data.results); // Ensure this matches the data structure
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <Loading />;
    }

    return (
        <section className="container md:px-[40px]">
            <h2 className="font-raleway text-[54px] font-bold mt-[100px] mb-[38px]">Our services</h2>
            <div>
                {data.map((item) => (
                    <Link href={`/services/${item.id}`} key={item.id}>

                            <ServiceCard data={item} />
                    </Link>
                ))}
            </div>
        </section>
    );
};
