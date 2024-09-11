'use client'
import React, {useEffect, useState} from 'react';
import { PartnerCard } from '../../ui';
import axios from "axios";

export const MainPageSevenBlock = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("http://178.253.42.15/api/partners/").catch((error) => {
            console.log(error);
        });
        return await res.data.results
    };

    useEffect(() => {
        fetchData().then((data) => setData(data));
    }, []);

  return (
    <section className="container h-auto mt-[100px] mb-[100px]">
        <div className='grid grif-cols-1 lg:grid-cols-2  font-raleway text-start mb-[50px]'>
            <h2 className='text-[32px] lg:text-[54px] font-bold'>Our partners</h2>
            <span className='my-[20px] lg:ml-[100px] text-[8px] lg:text-[18px] font-semibold'>We improve our clients marketing results with a <br/>data driven approach and we are hell-bent on<br/> making it awesome</span>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6'>
              { data && data.map((i) => (
        <PartnerCard key={i} data={i} />
      ))}
        </div>
    
    </section>
  );
};
