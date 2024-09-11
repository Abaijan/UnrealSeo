import React from 'react'

export const AboutUsSecondBlock =(data: any) => {
    const text = data && data.data[0]
  return (
    <section className=' container lg:pl-[40pxxb] '>
      <div className='font-raleway lg:font-semibold w-[50%] text-[16px] md:text-[18px] mt-[100px] mb-[150px]'>
        <span >{text && text.thesis1}</span>
        <hr className='mb-[40px] mt-[40px]' />
        <span>{text && text.thesis2}</span>
      </div>
    </section>
  )
}
