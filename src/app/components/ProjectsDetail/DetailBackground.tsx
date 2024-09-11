import React from 'react'

 export const DetailsDescription= ( data : object ) => {
    console.log(data)
        return (
            <div className="container py-[100px]">
                <div className="flex flex-col gap-[40px] lg:flex-row ">
                    <div
                        className="flex flex-row  text-[#FFFFFFBF] lg:flex-col gap-3 text-releway flex-col text-start gap-[10px] w-full lg:w-[40%]">
                        <h2 className="font-bold text-4xl xl:text-[50px]  font-raleway">{data.data.name2}</h2>
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <p className="text-[18px] font-raleway">{data.data.description}</p>
                    </div>
                </div>
            </div>
    )
 }