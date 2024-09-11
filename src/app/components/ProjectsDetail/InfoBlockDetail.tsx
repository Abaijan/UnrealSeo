import React from 'react'

export const InfoBlockDetail = (data : object) => {

    return (
        <section className="container px-[20px] mb-[50px] text-releway">
            <div className="flex gap-[40px]">
                <img className="w-[50%] h-full" src={data.data.banner2} alt=""/>
                <div className="max-w-[40%]">
                    <p className="text-[12px] lg:text-[18px] font-raleway">{data.data.description3}</p>
                </div>
            </div>
        </section>
    )
}