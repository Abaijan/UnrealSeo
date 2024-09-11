import React from "react";
import {
  Header,
  Footer,
  ServicePageFirstBlock,
  ServicePageSecondBlock,
  ServicePageThirdBlock,
  ServicePageFourBlock,
  ServicePageFiveBlock,
  MainPageSixBlock,
  MainPageTenBlock,
} from "../components";

export default function Service() {
  return (
    <div>
      <section className='bg-[url("/img/bg-sevice-page.png")] bg-cover bg-center bg-no-repeat  h-[902px]'>
        <Header />
        <ServicePageFirstBlock />
      </section>
      <ServicePageSecondBlock />
      <div className=" bg-[white] text-[black]">
        <ServicePageThirdBlock />
      </div>
      <div className='grid-cols-2 bg-[url("/img/Service-five-bg.png")] bg-contain bg-start bg-no-repeat h-[420px] md:h-[631px] lg:h-[631px] xl:h-[631px] '>
        <ServicePageFourBlock />
      </div>
      <div className=" bg-[white] text-[black]">
        <ServicePageFiveBlock />
      </div>
      <MainPageSixBlock />

      <MainPageTenBlock />
      <Footer />
    </div>
  );
}
