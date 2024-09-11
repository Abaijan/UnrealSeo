'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '../../ui';
import axios from 'axios';

export const MainPageSixBlock = () => {
  const [data, setData] = useState<any[]>([]); // Replace `any` with a more specific type if possible

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://178.253.42.15/api/ourprojects');
        setData(res.data.results); // No need for Promise.all here
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
      <section className="container">
        <div className="pt-[140px]">
          <h2 className="font-raleway font-extrabold lg:text-[110px] text-[60px] mb-[60px] lg:leading-[6rem]">
            Наши <br />
            проекты
          </h2>
          <div className="mt-[20px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
            {data && data.map((item) => (
                <Link href={`/ourprojects/${item.id}`} key={item.id}>
                  <Card data={item} />
                </Link>
            ))}
          </div>
        </div>
      </section>
  );
};
