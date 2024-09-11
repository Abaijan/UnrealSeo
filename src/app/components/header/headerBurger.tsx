import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function HeaderBurger({ isBlog }: { isBlog: boolean }) {
    const [click, setClick] = useState(false);
    const [blog, setBlog] = useState(false);

    useEffect(() => {
        if (isBlog) {
            setBlog(true);
        }
    }, [isBlog]); // Добавляем зависимость

    const handleClick = (): void => {
        setClick((prev) => !prev);
    };

    return (
        <>
            <div className="md:w-auto  w-full h-[120px] flex justify-between overflow-y-hidden items-center px-4">
                <span className="block z-[200] md:hidden  lg:hidden">
                    <img src="/img/logo.jpg" alt="logo" className="z-[201] w-[40px] h-[40px] md:w-[70px] md:h-[70px]" />
                </span>
                <button className="flex z-[200] lg:hidden cursor-pointer" onClick={handleClick}>
                    <svg width="32" height="32" className="w-[32px] h-[32px] md:w-[70px] md:h-[70px]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9997 13.333H9.33301" stroke={!blog ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 8H4" stroke={!blog ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 18.667H4" stroke={!blog ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.9997 24H9.33301" stroke={!blog ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {click && (
                <div className="black z-[100] pt-[120px] py-[60px] px-[30px] absolute w-full h-[890px] overflow-hidden body-scroll-lock scroll-smooth left-0 top-0">
                    <ul className=" mt-[30px] z-[101] flex flex-col justify-start gap-[10px] left-0 top-0 text-[40px]">
                        <li>
                            <Link href="/main">Главная</Link>
                        </li>
                        <li>
                            <Link href="/aboutus">О нас</Link>
                        </li>
                        <li>
                            <Link href="/service">Услуги</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Портфолио</Link>
                        </li>
                        <li>
                            <Link href="/blog">Блог</Link>
                        </li>
                        <li className="mr-5">
                            <Link href="/contacts">Контакты</Link>
                        </li>
                        <div className="mt-[120px] text-sm">
                            <p>Инновационные решения для вашей компании от опытной команды профессионалов</p>
                        </div>
                        <button className="mt-[40px] pt-[18px] pb-[18px] pr-[28px] pl-[28px] bg-[#84FF00] font-bold font-raleway text-sm rounded-[10px] w-[200px] text-[black] z-20">
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        <div className="flex mt-10 gap-[40px] md:gap-[300px] md:px-[40px]">
                            <div className="flex flex-col text-sm">
                                <span>+996 555 55 55 55</span>
                                <span>+996 555 55 55 55</span>
                                <span>+996 555 55 55 55</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-5">
                                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                                        <img className="w-7" src="/img/Instagraminatagram.svg" alt="Instagram" />
                                    </Link>
                                    <Link href="#" aria-label="TikTok" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                                        <img className="w-7" src="/img/TikToktiitok.svg" alt="TikTok" />
                                    </Link>
                                    <Link href="#" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                                        <img className="w-6" src="/img/Groupwhatsapp.svg" alt="WhatsApp" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            )}
        </>
    );
}
