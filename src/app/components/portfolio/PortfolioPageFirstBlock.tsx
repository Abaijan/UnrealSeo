import React from "react";
interface PortfolioPageFirstBlockProps {
    data: {
        id: number;
        title: string;
        description: string;
    };
}
export const PortfolioPageFirstBlock: React.FC<PortfolioPageFirstBlockProps> = ( { data } ) => {
  return (
    <section className=" container px-[50px]">
        <div className="flex md:flex-row flex-col xl:justify-between  md:justify-around md:items-center text-start gap-[40px] pt-[160px] h-[355px]">
          <h1 className="text-[34px] md:text-[54px] font-raleway font-bold text-[#393737] text-opasity-[8%]">{data.title}</h1>
          <p className="text-[18px] font-raleway md:font-semibold  text-[#FFFFFF] w-[340px] lg:w-[521px]">
            {data.description}
          </p>
        </div>
    </section>
  );
};
