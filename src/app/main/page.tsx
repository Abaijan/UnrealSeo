'use client';
import { Header, Footer, MainPageFirstBlock, MainPageFiveBlock, MainPageFourBlock, MainPageSecondBlock, MainPageThirdBlock, MainPageSixBlock, MainPageSevenBlock, MainPageEightBlock, MainPageTenBlock } from "../components";
import { useEffect, useState } from "react";
import Loading from "../../../src/app/loading";
import axios from "axios";

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
                const res = await axios.get("http://178.253.42.15/api/mainpage/1/");
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
                <MainPageSixBlock />
                <MainPageSevenBlock />
                <MainPageEightBlock />
                <MainPageTenBlock />
                <hr />
            </section>
            <Footer />
        </section>
    );
}
