'use client'
import React, {useState, useEffect} from "react";
import {
    Header,
    DetailsBanner,
    DetailsBackground,
    DetailsDescription,
    DetailsVideoComponent,
    InfoBlockDetail,
    MainPageTenBlock,
    Footer} from "../../components";
import axios from "axios";
import {Suspense} from "react";
import Loading from "../../../../src/app/loading";

const OneOfProject = (prop: number) => {
    const [datas, setDatas] = useState<BlogPageFirstBlockProps>(null);


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://178.253.42.15/api/our_project_detail/${prop.params.id}`).catch(err => console.log(err))
            setDatas(res.data);
        }
        fetchData();
    }, [axios])
    console.log(datas)
    return (
        <section>
            <Header isBlog={false}/>
            <Suspense fallback={<Loading/>}>
                {datas && (
                    <>
                        <div className="container px-[10px] pb-[140px] xl:px-[120px]  ">
                            <DetailsBanner data={datas && datas}/>
                        </div>
                        <div
                            className={`w-full xl:h-[400px] md:h-[300px] mb-[120px] h-[200px] bg-[url(${datas && datas.banner})] bg-cover bg-center bg-no-repeat`}>
                            <img className="w-full h-full" src={datas && datas.banner3} alt=""/>
                        </div>
                        <DetailsDescription data={datas && datas}/>
                        <DetailsVideoComponent data={datas && datas}/>
                        <InfoBlockDetail data={datas && datas}/>
                        <MainPageTenBlock/>
                    </>

                )
                }
            </Suspense>
            <Footer/>
        </section>
    )

}
export default OneOfProject