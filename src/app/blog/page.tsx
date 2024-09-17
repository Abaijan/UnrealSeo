'use client'
import React , { useEffect, useState }from 'react'

import { Header,Footer, MainPageTenBlock  } from '../components'
import  BloglPageFirstBlock  from '../components/blogPage/BlogPageFirstBlock'

export default function Blog() {
    const [isBlog, setBlog] = useState(false)
        useEffect(() => {
            const path = window.location.pathname;
            const isBlog = path.includes('blog');
            setBlog(isBlog);
            console.log(isBlog)
        },[isBlog]);

  return (
    <div>
        <section className="bg-[#ffffff] text-[black]">
            <section className="font-raleway text-[black]" >
                <Header/>
            </section>
            <BloglPageFirstBlock/>
            <MainPageTenBlock/>
            <hr/>
            <Footer/>
        </section>



    </div>
  )
}
