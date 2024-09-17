'use client'
import React, {useEffect, useState} from 'react'
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
import Image from "next/image";

interface Review {
    id: number;
    name: string;
    description: string;
    file: string;
    avatar: string;
}
export const Review = () => {
    const [data, setData] = useState<Review[] | null>(null); // уточняем тип

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get("/reviews/");
            return res.data;
        } catch (error) {
            console.error(error);
            return null; // возвращаем null, если произошла ошибка
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            if (data) setData(data.results); // проверяем, есть ли данные перед их использованием
        });
    }, []);

    if (!data) return <Loading />;

    return (
        <section className="container py-[100px] xl:mt-[200px]  px-[20px] md:px-[40px]">
            <div className="flex flex-col gap-[40px]">
                <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-center">Отзывы наших клиентов</h1>
                <div className="flex h-auto overflow-x-scroll gap-[30px] scrollbar-hide">
                    <div className="flex lg:flex-row flex-col gap-[30px]">
                        {
                            data.map(review => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 flex flex-col flex-col-reverse md:flex-row md:flex-row w-full md:w-[750px] lg:w-[989px] px-[30px] py-[20px] rounded-[6px] border-[1px] border-gray-300 bg-black text-white rounded-lg overflow-hidden shadow-lg">

                                    {/* Текстовая часть с цитатой */}
                                    <div className="p-6 flex flex-col gap-[40px] md:w-1/2">
                                        <p className="text-[12px] opasity-[0.5] lg:text-[16px] md:text-[18px] xl:text-xl font-semibold leading-relaxed">
                                            {review.description}
                                        </p>
                                        <div className="flex items-center">
                                            <Image
                                                src={review.avatar} // путь к фото автора
                                                alt="Author's photo"
                                                width={48}
                                                height={48}
                                                className="rounded-full"
                                            />
                                            <div className="ml-4">
                                                <p className="text-lg font-bold">Tomas Saimon</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Изображение с видео-кнопкой */}
                                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                                        <Image
                                            src={review.file} // путь к видео-миниатюре
                                            alt="Video thumbnail"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-r-lg"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
