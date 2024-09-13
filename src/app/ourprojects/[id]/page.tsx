'use client';
import React, { useState, useEffect } from "react";
import axiosInstance from '../../utils/api';
import {
    Header,
    DetailsBanner,
    DetailsDescription,
    DetailsVideoComponent,
    InfoBlockDetail,
    MainPageTenBlock,
    Footer
} from "../../components";
import Loading from "../../../../src/app/loading";

// Интерфейс для пропсов
interface ProjectProps {
    params: {
        id: string;
    };
}

// Интерфейс для данных проекта
interface ProjectData {
    banner: string;
    banner3: string;
    description: string;
    video_url: string;
    name: string;
    // Добавьте другие поля по необходимости
}

export default function OneOfProject({ params }: ProjectProps) {
    const [datas, setDatas] = useState<ProjectData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(`/our_project_detail/${params.id}`);
                setDatas(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [params.id]);

    if (!datas) {
        return <Loading />;
    }
    console.log(datas)
    return (
        <section>
            <Header />
            <div className="container px-[10px] pb-[140px] xl:px-[120px]">
                <DetailsBanner data={datas} />
            </div>
            <div
                className="w-full xl:h-[400px] md:h-[300px] mb-[120px] h-[200px]"
                style={{ backgroundImage: `url(${datas.banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <img className="w-full h-full" src={datas.banner3} alt="" />
            </div>
            <DetailsDescription data={datas} />
            <DetailsVideoComponent data={datas} />
            <InfoBlockDetail data={datas} />
            <MainPageTenBlock />
            <hr />
            <Footer />
        </section>
    );
}
