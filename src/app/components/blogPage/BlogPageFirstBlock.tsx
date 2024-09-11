'use client'

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api';

// Интерфейс для одного элемента блога
interface BlogItem {
    date: string;
    id: string;
    name: string;
    description: string;
    created_at: string;
    image: string;
}

// Интерфейс для пропсов компонента
interface BlogPageFirstBlockProps {
    data: BlogItem[];
}

 const BlogPageFirstBlock = () => {
    const [data, setData] = useState<BlogItem[]>([]); // Устанавливаем тип данных

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/blog/');
                const data = res.data.results;
                setData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <section className="container px-[10px] lg:px-[120px] text-releway">
            <div className="flex flex-col px-[40px] gap-[40px] lg:gap-[120px]">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div className="flex flex-col gap-5" key={item.id}>
                            <b>Блог : <span className="text-[#9500DC]">{item.created_at.split('T')[0]} </span></b>
                            <h3 className="text-[16px] font-bold ">{item.name}</h3>
                            <p className="text-[14px] ">{item.description}</p>
                            <img src={item.image} alt="Blog Image" />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Показываем текст во время загрузки
                )}
            </div>
        </section>
    );
};

export default BlogPageFirstBlock;

