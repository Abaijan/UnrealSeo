"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import HeaderBurger from './headerBurger';
import {useRouter} from "next/navigation"; // Ensure this is correct for your setup
import Image from "next/image";
export const Header = () => {
    const router = useRouter();
    const [isBlog, setIsBlog] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        const isBlog = path.includes('blog') ? true : false;
        setIsBlog(isBlog);
    }, [isBlog]);


    return (
        <section className="container">
            <header>
                <div className="flex justify-between items-center">
          <span className="hidden  md:block z-[200]">
          <Image src="/img/logo.jpg" className="cursor-pointer h-[100px] w-[100px]" width={150} height={150} alt="logo"/>
          </span>
                    <ul className="lg:text-lg hidden lg:flex md:gap-[40px] lg:gap-[4vw] text-xl items-center">
                        <li><Link href="/main">Главная</Link></li>
                        <li><Link href="/aboutus">О нас</Link></li>
                        <li><Link href="/service">Услуги</Link></li>
                        <li><Link href="/portfolio">Портфолио</Link></li>
                        <li><Link href="/blog">Блог</Link></li>
                        <li className="mr-5"><Link href="/contacts">Контакты</Link></li>
                        <Link href="/contacts">
                            <button
                                className="flex md:hidden lg:block lg:w-[165px] lg:h-[40px] border lg:ml-[0.5vw] rounded-lg border-gray-50">
                                <span className="lg:text-base text-light">Работать с нами</span>
                            </button>
                        </Link>
                    </ul>
                    <HeaderBurger isBlog={isBlog}/>
                </div>
            </header>
        </section>
    );
};
