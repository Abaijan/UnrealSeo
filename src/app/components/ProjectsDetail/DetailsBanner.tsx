import React from 'react'

export const DetailsBanner = ( data : object ) => {
    console.log(data)
    return (
        <section className="container flex flex-col lg:flex-row justify-between">
            <div className=" flex flex-col gap-[40px] w-full lg:w-[40%] align-center pt-[50px] h-full">
                <h1 className="font-bold text-5xl font-raleway">{data.data.name}</h1>
                <p className="text-[18px] font-raleway max-w-[400px]">{data.data.description}</p>
            </div>
            <img  className=" lg:mt-[40px] w-full lg:w-[60%]" src={data.data.banner} alt="banner"/>
        </section>
    )
}

