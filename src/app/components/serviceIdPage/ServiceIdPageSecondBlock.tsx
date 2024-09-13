'use client';
import {useState, useEffect} from 'react';
import React from 'react';

// interface ServiceIdPageSecondBlockProps {
//     data:{
//             id: number;
//             name: string;
//             description: string;
//         }[];
// }


export const ServiceIdPageSecondBlock = (arr: any) => {
    const [services, setServices] = useState<any>(arr.data);

    return (
        <section className='container lg:px-[30px] font-raleway'>
            <h2 className='text-[54px] font-bold mb-[56px] mt-[93px]'>Об услуге</h2>
            <div className="grid xl:grid-cols-3 gap-10 lg:grid-cols-2 items-center grid-cols-1">
                {services && services.map((i: any ) => (
                    <div key={i.id} className="md:w-[413px] w-[350px] h-[256px] rounded-[6px] border-[1px] border-[#FFFFFF] border-opacity-40 relative flex flex-col gap-2">
                        <div className='pl-[22px] pt-[34px] pr-[34px] pb-[41px] h-[178px]'>
                            <h3 className="font-raleway text-[24px] font-semibold pb-[12px] w-[70%] z-20">{i.name}</h3>
                            <p className="font-raleway text-[18px] leading-[1.27rem] font-medium z-20 text-opacity-75">{i.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
