import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    data: {
        id: number;
        services: any; // Update this if you know the exact type
        name: string;
        description: string;
        image: string;
    };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
    return (
        <div
            className={`font-raleway mb-[130px] relative md:flex flex-col items-end justify-between ${
                data.id % 2 === 0
                    ? "flex-col-reverse md:flex-row-reverse"
                    : "flex-col md:flex-row"
            }`}
        >
            <span
                className="text-[70px] xl:text-[180px] text-[white] text-opacity-[8%] text-center absolute inset-0 flex justify-center items-start z-10"
            >
                3D motion
            </span>
            <img
                className="md:w-[320px] lg:w-[50%] relative z-20"
                src={data.image}
                alt=""
            />
            <div className="relative flex flex-col mt-[30px] gap-3 z-20 xl:w-[522px]">
                <span className="font-semibold text-[24px] mb-[16px]">
                    {data.name}
                </span>
                <p className="font-semibold text-[14px] w-[350px] xl:text-[18px] text-opacity-18 mb-[50px]">
                    {data.description}
                </p>
                <Link href={`/service/${data.id}`}>
                    <button className="font-semibold text-[18px] w-[130px] rounded-[100px] text-[#FF00F5] border-[2px] pt-[8px] pb-[8px] pr-[43px] pl-[43px] text-center border-[#FF00F5]">
                        more
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;
