"use client";
import { useState, useEffect } from 'react';
import axiosInstance from '../../utils/api';
import Image from 'next/image';
import Loading from '../../loading';


interface WorkProcessItem {
    id: number;
    name: string;
    description: string;
    image: string;
}
interface WorkProcess {
    id: number;
    name: string;
    work_process: WorkProcessItem[];
}


export const PortfolioPageThirdBlock = () => {
    const [slides, setSlides] = useState<WorkProcess | null>(null); // Изначально null, так как это объект
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/workprocess/');
                setSlides(res.data.results[0]); // Сохраняем первый объект work process
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); // Пустой массив зависимостей

    useEffect(() => {
        const updateWeight = () => {
            if (slides?.work_process) {
                const windowWidth = window.innerWidth;
                const newWeight = windowWidth > 768 ? slides.work_process.length * 400 : slides.work_process.length * 250;
                setWeight(newWeight);
            }
        };

        // Устанавливаем начальное значение
        updateWeight();

        // Обработчик для изменения размера окна
        window.addEventListener('resize', updateWeight);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateWeight);
        };
    }, [slides]);

    if (!slides || !slides.work_process) {
        return <Loading />;
    }

    return (
        <section className='container xl:px-[50px] py-[100px]'>
            <div className='font-raleway text-start mb-[50px]'>
                <h2 className='text-[30px]  md:w-[60%] ml-3 lg:text-[54px] font-bold'>
                    {slides.name}
                </h2>
            </div>
            <div className='px-[20px] h-[600px] scroll-y-none overflow-auto xl:w-[1400px] lg:w-[950px] md:w-[650px]'>
                <div className='flex gap-[40px]' style={{ width: weight + 'px' }}>
                    {slides.work_process.map(slide => (
                        <div key={slide.id} className='md:h-[400px] md:w-[400px] h-[250px] w-[250px] flex flex-col text-start'>
                            <Image
                                src={slide.image}
                                alt="Slide"
                                className='w-[400px] h-[400px] object-cover'
                                width={400}
                                height={400}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
