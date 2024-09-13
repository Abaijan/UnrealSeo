'use client';
import React, {useEffect, useState} from "react";
import axiosInstance from "../../utils/api";
import Loading from "../../loading";
interface ServiceData {
    id: number;
    number: string;
    title: string;
    description: string;
}

export const ServicePageFiveBlock = () => {
  const [data, setData] = useState<ServiceData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/informationinpageservicesinlinemodel/");
        setData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if(!data) return <Loading/>
  return (
    <section className=" container">
      <div className="space-y-6 pt-[100px] pb-[100px]  font-raleway">
        {data.map((item) => (
            <div key={item.id} className="grid md:grid-cols-3 grid-cols-1 border-b pb-14">
              <span className="text-[32px] font-semibold">{item.number}/</span>
              <h2 className="text-[34px] font-semibold w-[200px]">
                {item.title}
              </h2>
              <p className="text-[18px] font-semibold">
                {item.description}
              </p>
            </div>
        ))}


      </div>
    </section>
  );
};
