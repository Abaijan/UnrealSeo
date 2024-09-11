'use client'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Link from "next/link";
import Loading from "../../loading";
export const MainPageFirstBlock = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://178.253.42.15/api/mainpage/1/").catch((error) => {
                console.log(error);
            });
            setData(res.data);
        };
        fetchData().then((data) => {
            if (data) setData(data);
        });
    }, []);

    if (!data) {
        return <Loading/>;
    };
    const item = data
    return (
        <section className='relative md:pb-[300px]'>
            <div
                className='absolute md:top-[-3%] md:left-[85%] lg:top-[-7%]  top-[2%] w-[8rem] h-[8rem] left-[65%] lg:left-[90%] z-10'>
                <img src={item &&  item.image} alt="mainPhoto"/>
            </div>
            <div
                className='absolute md:left-[-10%] md:top-[30%] left-[-90%]  md:w-[80%] md:h-[80%]  lg:left-auto lg:top-[20%] top-[10%] z-40'>
                <img src={item  && item.image} alt="mainPhoto"/>
            </div>
            <div
                className='absolute md:hidden overflow-hidden left-[-60%] w-[60%] h-[60%] origin-center rotate-90 top-[-20%] lg:left-auto lg:top-auto z-40'>
                <img src={ item && item.image} alt="mainPhoto"/>
            </div>

            <div className='container h-[970px]'>

                <div
                    className='flex flex-col items-end text-right h-[100%] md:px-[40px] md:gap-[20px] pt-[200px] lg:pt-[200px] '>
                    <h3 className='font-raleway h-[123px]  lg:h-auto text-[32px] md:text-[60px] lg:px-[40px] lg:text-[80px]  leading-[2rem] md:leading-[3.5rem] lg:leading-[5rem] z-20  font-bold'>{item && item.name}</h3>
                    <span
                        className=' text-[16px] md:text-[20px] font-raleway  md:mt-[42px] md:w-[50%] lg:px-[40px] mb-[62px] lg:w- z-20'>{item && item.description}</span>
                    <Link href="/contacts">
                        <button
                            type="button"
                            className='pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#84FF00] font-bold lg:px-[40px] lg:font-bold font-raleway text-[12px] lg:text-[18px] w-[191px] h-[55px] lg:w-auto lg:h-auto  rounded-[10px] text-[black]  z-20'>ОСТАВИТЬ
                        </button>
                    </Link>

                </div>

            </div>

        </section>
    )
}
