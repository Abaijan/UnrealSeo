import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unreal Kg",
  description: "Маркетинговая компания Unreal Kg",
    metadataBase: new URL("https://unreal.kg"),
    keywords: [
        "unreal",
        "marketing",
        "company",
        "kg",
        "unreal kg",
        "анреал кг компания",
        "анреал кг ",
    ],
    openGraph: {
        type: 'website',
        url: 'https://unreal.kg',
        title: 'Unreal Kg',
        description: 'Маркетинговая компания Unreal Kg',
        siteName: 'Unreal Kg',
        images: [
            {
                url: '/img/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Unreal Kg Logo',
            },
        ],
    },
    creator: "Nevo Devs",
    publisher: "Nevo Devs",
    applicationName: "Unreal Kg",
    authors: [{name :"Nevo Devs"}],
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/img/logo.jpg",
        shortcut: "/img/logo.jpg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
       <head>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Infant&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
