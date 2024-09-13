import React from "react";
import Link from "next/link";

interface ServiceData {
    id: number;
    name: string;
    services: any;
    description: string;
    image: string;
}

export const ServiceIdPageFirstBlock: React.FC<{ data: ServiceData }> = ({data}) => {
    console.log(data)
    return (
        <section>
            <div className=" flex flex-col xl:flex-row xl:items-center w-[100vw] py-[30px] mt-[50px]">
                <img
                    className="xl:w-[50%] z-10"
                    src={data.image}
                    alt={data.name}
                />
                <div className="flex flex-col pl-3 items-start xl:justify-center text-start h-[100%]  xl:ml-[50px] xl:w-[40%]">
                    <h3 className="font-raleway mt-3 xl:mt-0 text-[60px] leading-[60px] xl:text-[124px] xl:leading-[7rem] z-20 font-bold">
                        {data.name}
                    </h3>
                    <span className="text-[18px] md:w-[500px] font-raleway mt-[67px] font-semibold mb-[32px] ml-[8%] z-20">
                       {data.description}
                     </span>
                     <Link href='/contacts'>
                        <button
                            className=" bg-[#85FF01] font-bold font-raleway text-[14px] w-[200px] h-[60px] rounded-[10px] text-[black] ml-[8%]   z-20">
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        </Link>
                 </div>
            </div>
        </section>
    );
};
