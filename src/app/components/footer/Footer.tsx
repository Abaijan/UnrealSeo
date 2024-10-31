'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/api';
import Image from 'next/image';
import {useRouter} from "next/navigation";
// Тип для данных о социальных ссылках
interface SocialLink {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export const Footer = () => {
  const [data, setData] = useState<SocialLink[]>([]);
  const router = useRouter();
  const [isBlog, setIsBlog] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const isBlog = path.includes('blog') ? true : false;
    setIsBlog(isBlog);
  }, [isBlog]);// Устанавливаем тип для массива социальных ссылок

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get('/footer');
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
      <footer className="font-raleway text-muted-foreground py-12 bg-[#0000]ext-[white]">
        <div style={{color: isBlog ? 'black' : 'white'}} className="container flex justify-between t">
          <div className="w-[50%]">
            <Image src="/img/logo.jpg" alt="Logo" width={300} height={300}/>
          </div>
          <div className=" max-w-7xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="grid gap-2">
              <nav className="flex flex-col gap-[20px]">
                <Link href="/main" className="hover:underline" prefetch={false}>
                  Главная
                </Link>
                <Link href="/aboutus" className="hover:underline" prefetch={false}>
                  О нас
                </Link>
                <Link href="/contacts" className="hover:underline" prefetch={false}>
                  Контакты
                </Link>
              </nav>
            </div>
            <div className="grid">
              <nav className="flex flex-col gap-[20px]">
                <Link href="/service" className="hover:underline"  prefetch={false}>
                  Аутсорсинг
                </Link>
                <Link href="/about" className="hover:underline" prefetch={false}>
                  Отзывы
                </Link>
                <Link href="service" className="hover:underline" prefetch={false}>
                  3d motion
                </Link>
                <Link href="/portfolio" className="hover:underline" prefetch={false}>
                  Портфолио
                </Link>

              </nav>
            </div>
            <div className="block lg:hidden"></div>
            <div className="grid  gap-2">
              <nav className="flex flex-col gap-[20px] mb-4">
                <Link href="/contacts" className="text-[10px] md:text-[20px] hover:underline" prefetch={false}>
                  +996 555 55 55 55
                </Link>
                <Link href="/contacts" className="text-[10px] md:text-[20px] hover:underline" prefetch={false}>
                  info@example.com
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
                          <Image src={item.logo} alt={item.name} width={32} height={32}/>
                        </Link>
                    ))
                ) : (
                    <p>No social links available</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </footer>
  );
};
