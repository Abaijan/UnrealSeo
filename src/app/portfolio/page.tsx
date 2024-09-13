'use client'
import React from 'react'
import { Header,Footer,PortfolioPageFirstBlock,MainPageSixBlock,PortfolioPageThirdBlock ,MainPageTenBlock} from '../components'
import { useState, useEffect } from 'react';
import axiosInstance from "../utils/api";
import Loading from "../loading";

interface PortfolioData {
        id: number ;
        title: string;
        description: string;
}
export default function Portfolio() {
    const [data, setData] = useState<PortfolioData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/quoteinportfolio/');
                setData(res.data.results[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data)
    if (!data) {
        return <Loading />;
    }
  return (
    <>
      <Header />
      <PortfolioPageFirstBlock data={data} />
      <MainPageSixBlock/>
      <PortfolioPageThirdBlock/> 
      <MainPageTenBlock/>
        <hr/>
      <Footer/>
    </>
  )
}
