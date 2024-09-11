'use client';
import { useState } from 'react';

export const ContactPageThirdBlock =() => {
   const [expanded, setExpanded] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const data = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of design services to meet the diverse needs of our clients. Our services include Branding, Strategy, User Experience, Visual Design, Motion Design, and Interaction Design. For more details on our design service offering, visit our About page.\n\nPlease note that our services are tailored to suit the unique needs of every project, and we are always open to discussing custom design solutions beyond our listed offerings. We don't walk around with hammer seeing every problem as a nail.",
    }, 
     {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of design services to meet the diverse needs of our clients. Our services include Branding, Strategy, User Experience, Visual Design, Motion Design, and Interaction Design. For more details on our design service offering, visit our About page.\n\nPlease note that our services are tailored to suit the unique needs of every project, and we are always open to discussing custom design solutions beyond our listed offerings. We don't walk around with hammer seeing every problem as a nail.",
    }, 
     {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of design services to meet the diverse needs of our clients. Our services include Branding, Strategy, User Experience, Visual Design, Motion Design, and Interaction Design. For more details on our design service offering, visit our About page.\n\nPlease note that our services are tailored to suit the unique needs of every project, and we are always open to discussing custom design solutions beyond our listed offerings. We don't walk around with hammer seeing every problem as a nail.",
    }, 
      {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of design services to meet the diverse needs of our clients. Our services include Branding, Strategy, User Experience, Visual Design, Motion Design, and Interaction Design. For more details on our design service offering, visit our About page.\n\nPlease note that our services are tailored to suit the unique needs of every project, and we are always open to discussing custom design solutions beyond our listed offerings. We don't walk around with hammer seeing every problem as a nail.",
    }, 
    

  ];
  return (
    <section className=' container font-raleway my-[40px]'>
      <div className=" text-white flex flex-col lg:flex-row justify-between pl-[10px]">
      <h2 className="text-[54px] font-bold ">Curious to know more?</h2>
      <div className='lg:w-[630px]'>
         {data.map((item, index) => (
        <div key={index} className="border-b m-[20px]">
          <button
            onClick={() => toggleSection(index)}
            className="flex justify-between w-full py-4 text-left text-[18px] md:text-[24px]   focus:outline-none"
          >
            {item.question}
            <span
              className={`transform transition-transform ${
                expanded === index ? "rotate-180" : ""
              }`}
            >
              {expanded === index ? "↑" : "↓"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pt-[42px] pb-[36px] w-[522px]">
              <p className="text-[18px] font-semibold leading-relaxed whitespace-pre-wrap text-[gray] opacity-75">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
     
    </div>
     </section>
  )
}
