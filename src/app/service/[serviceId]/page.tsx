import { Header, ServiceIdPageFirstBlock,ServiceIdPageSecondBlock,ServiceIdPageThirdBlock,Footer, ServicePageFiveBlock,MainPageSixBlock,MainPageTenBlock } from "../../components";

export default function ServiceId  () {
return(
    <>
        <Header isBlog={false}/>
        <ServiceIdPageFirstBlock/>
        <ServiceIdPageSecondBlock/>
        <section className=' bg-[url("/img/32.png")] bg-contain bg-no-repeat bg-bottom'>

        <ServiceIdPageThirdBlock/>
        </section>
        <section className='text-[black] bg-[white]'>
             <ServicePageFiveBlock/>
        </section>
        <MainPageSixBlock/>
        <MainPageTenBlock/>
        <Footer/>
    </>
)
}