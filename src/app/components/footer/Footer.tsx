'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Тип для данных о социальных ссылках
interface SocialLink {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export const Footer = () => {
  const [data, setData] = useState<SocialLink[]>([]); // Устанавливаем тип для массива социальных ссылок

  const fetchData = async () => {
    try {
      const res = await axios.get('http://178.253.42.15/api/footer');
      return res.data.results;
    } catch (error) {
      console.log('Error fetching footer data:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
      <footer className="font-raleway text-muted-foreground py-12 bg-[#0000] text-[white]">
        <div className="container max-w-7xl grid grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          <div className="">
            <img src="/img/logo.jpg" alt="logo" className="z-[200] ml-[3vw] w-[42px] h-[42px] md:w-[100px] md:h-[100px]" />
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Главная</h4>
            <nav className="grid gap-1">
              <Link href="/main" className="hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="/aboutus" className="hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="/contact" className="hover:underline" prefetch={false}>
                Contact
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Аутсорсинг</h4>
            <nav className="grid gap-1">
              <Link href="/service" className="hover:underline" prefetch={false}>
                Our Services
              </Link>
              <Link href="/about" className="hover:underline" prefetch={false}>
                Why Choose Us
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Testimonials
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Case Studies
              </Link>
              <Link href="/contact" className="hover:underline" prefetch={false}>
                FAQs
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <nav className="grid gap-1 mb-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                +996 555 55 55 55
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                info@example.com
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Bishkek, Kyrgyzstan
              </Link>
            </nav>
            <div className="flex gap-2">
              {data && data.length > 0 ? (
                  data.map((item) => (
                      <Link
                          key={item.id}
                          href={item.link}
                          aria-label={item.name}
                          className="text-muted-foreground hover:text-foreground"
                          prefetch={false}
                      >
                        <img className="w-[30px] h-[30px]" src={item.logo} alt={item.name} />
                      </Link>
                  ))
              ) : (
                  <p>No social links available</p>
              )}
            </div>
          </div>
        </div>
      </footer>
  );
};
