'use client'

import React, {useEffect, useState} from 'react';
import axios from "axios";


interface BlogPageFirstBlockProps {
    data: {
        date: string;
        id: string;
        name: string;
        description: string;
    }[];
}

 const BlogPageFirstBlock = () => {
    const [ data , setData ] = useState<BlogPageFirstBlockProps>(null);


    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get('http://178.253.42.15/api/blog').catch(err => console.log(err))
            const data = res.data.results
            setData(data);
        }
        fetchData();
    }, [axios])
console.log(data)
    return (
        <section className="container px-[10px] lg:px-[120px] text-releway">
            <div className="flex flex-col px-[40px] gap-[40px] lg:gap-[120px]">
                { data ? data.map((item) => (
                    <div className="flex flex-col gap-5" key={item.id}>
                        <b>Блог : <span className="text-[#9500DC]">{item.created_at.split('T')[0]} </span></b>
                        <h3 className="text-[16px] font-bold ">{item.name}</h3>
                        <p className="text-[14px] ">{item.description}</p>
                        <img src={item.image} alt=""/>
                    </div>
                )) : null }

            </div>
        </section>
    );
};
        export default BlogPageFirstBlock