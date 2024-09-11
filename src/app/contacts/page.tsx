import React from 'react'
import { Header,Footer, ContactPageFirstBlock ,ContactPageSecondBlock, MainPageTenBlock} from '../components'
import { ContactPageThirdBlock } from '../components/contacts/ContactPageThirdBlock'
export default function Contacts() {
  return (
    <>
      <Header />
      <ContactPageFirstBlock/>
      <ContactPageSecondBlock/>
      <ContactPageThirdBlock/>
      <MainPageTenBlock/>
      <Footer/>
    </>  )
}
