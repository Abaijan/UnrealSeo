import React from 'react'
import { Header,Footer, ContactPageFirstBlock ,ContactPageSecondBlock, MainPageTenBlock} from '../components'
import { ContactPageThirdBlock } from '../components/contacts/ContactPageThirdBlock'
export default function Contacts() {
  return (
    <>
      <Header isBlog={false}/>
      <ContactPageFirstBlock/>
      <ContactPageSecondBlock/>
      <ContactPageThirdBlock/>
      <MainPageTenBlock/>
      <Footer/>
    </>  )
}
