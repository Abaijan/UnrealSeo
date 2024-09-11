'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

export const MainPageEightBlock = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {

        const res = await axios.get("http://178.253.42.15/api/projectcost/1/").catch((error) => {
            console.log(error);
        });
        return await res.data
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (data) setData(data);
        });

        if (!data) {
            return <p>Loading...</p>;
        }
    }, []);
    console.log(data)


    return (
        <section className=" container  md:mb-[100px] flex justify-center items-center">
            <div style={{backgroundImage: `url(${data && data.image})`}}
                 className={`w-[1280px] h-[300px] md:h-[544px] bg-no-repeat bg-contain bg-center font-raleway flex justify-center items-center flex-col  text-center gap-3`}>
                <div className="mb-[20px]">
                    {" "}
                    <h2 className="text-[22px] lg:text-[60px] xl:text-[86px] font-raleway font-extrabold   lg:leading-[6rem] ">
                        {data && data.name}
                    </h2>
                    <span className="text-[12px] lg:text-[24px]">
            {" "}
                        {data && data.description}
          </span>
                </div>
                <Link href="/contacts">
                    <button
                        className="pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-[#84FF00] font-bold font-raleway text-[12px] bg:text-[18px] rounded-[10px] text-[black]  z-20">
                        расчитать
                    </button>
                </Link>

            </div>
        </section>
    );
};
