'use client'
import {Header,Footer, MainPageFirstBlock, MainPageFiveBlock, MainPageFourBlock, MainPageSecondBlock, MainPageThirdBlock,MainPageSixBlock, MainPageSevenBlock, MainPageEightBlock, MainPageTenBlock } from "../components";

import {Suspense, useEffect, useState} from "react";
import Loading from "../../../src/app/loading";
import axios from "axios";
export default function Main() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://178.253.42.15/api/mainpage/1/").catch((error) => {
                console.log(error);
            });
            setData(res.data);
        };
        fetchData().then((data) => {
            if (data) setData(data);
        });
    }, []);

    if (!data) {
        return <Loading/>;
    };
  return (
   <section className="font-raleway">
      <Header  isBlog={false}/>
       <Suspense fallback={<Loading/>}>
               <section>
                   <MainPageFirstBlock />
                   <MainPageSecondBlock/>
                   <div className="bg-[white] text-[black] font-raleway">
                       <MainPageThirdBlock/>
                       <MainPageFourBlock/>
                   </div>
                   <MainPageSixBlock/>
                   <MainPageSevenBlock/>
                   <MainPageEightBlock/>
                   <MainPageTenBlock/>
                   <hr></hr>
               </section>
       </Suspense>
      <Footer/>  
   </section>
  );
}
