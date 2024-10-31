"use client";
import {Swiper, SwiperSlide} from 'swiper/react';
import {useState, useEffect} from 'react';
import axiosInstance from '../../utils/api';
import 'swiper/css';
import Image from 'next/image';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

export const OurTeam = () => {
    const [slides, setSlides] = useState<any[]>([]); // Начальное состояние - пустой массив

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/ourteam/');
                setSlides(res.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); // Пустой массив зависимостей, чтобы эффект вызвался один раз

    // Если данные еще не загрузились, показываем что-то (например, Loading)
    if (!slides.length) {
        return <p>Loading...</p>;
    }

    return (
        <section className="container px-[40px]">
            <div className="font-raleway text-start md:mt-[0] mt-[-200px] mb-[50px]">
                <h2 className="text-[30px] md:w-[60%] ml-3 lg:text-[54px] font-bold">Our Team:</h2>
            </div>
            <div className="px-[20px] lg:h-[600px] h-[400px] overflow-scroll">
                <div className="flex gap-[40px]">
                    {slides.map(slide => (
                        <div key={slide.id} className="min-h-[200px] min-w-[200px] lg:min-h-[400px] lg:min-w-[400px] text-start">
                            <Image
                                src={slide.image} // URL изображения
                                alt="our team"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg"
                            />
                            <p className="text-[16px] font-raleway font-bold text-center">{slide.full_name}</p>
                            <p className="text-[16px] font-raleway font-bold text-center">{slide.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
