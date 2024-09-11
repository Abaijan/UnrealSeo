import React from 'react'
import { Header,Footer,PortfolioPageFirstBlock,MainPageSixBlock,PortfolioPageThirdBlock ,MainPageTenBlock} from '../components'

export default function Portfolio() {
  return (
    <>
      <Header  isBlog={false}/>
      <PortfolioPageFirstBlock/>
      <MainPageSixBlock/>
      <PortfolioPageThirdBlock/> 
      <MainPageTenBlock/>
      <Footer/>
    </>
  )
}
