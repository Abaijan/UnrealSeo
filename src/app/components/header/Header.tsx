"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeaderBurger from './headerBurger'

export const Header = ( isBlog : any ) => {

  return (
    <section style={isBlog ? {color: 'white'} : {color : 'black'}} className="container">
      <header>
        <div className="flex justify-between  items-center">
        <span className="hidden min-w-[62px] md:block z-[200]">
            <img src="/img/logo.jpg" alt="logo" className="md:w-[100px] md:h-[100px] z-[200] w-[32px] h-[32px] " />
          </span>
          <ul className="lg:text-lg hidden lg:flex md:gap-[40px] lg:gap-[4vw] text-xl items-center">
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
              <Link href="/contacts"> Контакты</Link>
            </li>
            <button className="flex md:hidden lg:block lg:w-[165px] lg:h-[40px] border lg:ml-[0.5vw] rounded-lg border-gray-50">
              <span className="lg:text-base text-light">Работать с нами</span>
            </button>
          </ul>
          <HeaderBurger isBlog={isBlog}/>
        </div>
      </header>
    </section>
  );
 
};
