'use client';
import { Header, Footer, MainPageFirstBlock, Review, News, MainPageFiveBlock, MainPageFourBlock, MainPageSecondBlock, MainPageThirdBlock, MainPageSixBlock, MainPageSevenBlock, MainPageEightBlock, MainPageTenBlock } from "../components";
import { useEffect, useState } from "react";
import Loading from "../../../src/app/loading";
import axiosInstance from '../utils/api';

// Определяем тип для состояния данных
interface MainPageData {
    // Замените `any` на конкретные свойства данных
    [key: string]: any;
}

export default function Main() {
    const [data, setData] = useState<MainPageData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/mainpage/1/");
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <Loading />;
    }

    return (
        <section className="font-raleway">
            <Header />
            <section>
                <MainPageFirstBlock />
                <MainPageSecondBlock />
                <div className="bg-[white] text-[black] font-raleway">
                    <MainPageThirdBlock />
                    <MainPageFourBlock />
                </div>
                <Review />
                <MainPageSixBlock />
                <MainPageSevenBlock />
                <MainPageEightBlock />
                <News/>
                <MainPageTenBlock />
                <hr />
            </section>
            <Footer />
        </section>
    );
}
