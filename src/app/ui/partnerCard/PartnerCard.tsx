import React from 'react';
import Image from "next/image";
interface PartnerCardProps {
    data: {
        id: string;
        image: string;
        name: string;
    };
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ data }) => {
    return (
        <div className='w-[180px] h-[60px] p-8 lg:w-[305px] lg:h-[100px] rounded-[10px] bg-[#222222] flex justify-center items-center'>
            <Image width={20} height={20}  className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]' src={data.image} alt="" />
            <span className='text-[14px] lg:text-[18px] font-semibold ml-[5px] lg:ml-[10px]'>{data.name}</span>
        </div>
    );
};
