import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Unreal Kg - Маркетинговая компания",
    description: "Маркетинговая компания Unreal Kg - ",
    metadataBase: new URL("https://unreal.kg"),
    keywords: [
        "unreal",
        "marketing",
        "company",
        "kg",
        "unreal kg",
        "анреал кг компания",
        "анреал кг ",
        "маркетирнговая компания",
        "маркетинговая компания в Бишкеке",
    ],
    openGraph: {
        type: 'website',
        url: 'https://unreal.kg',
        title: 'Unreal Kg- Marketing Company',
        description: 'Marketing company Unreal Kg',
        siteName: 'Unreal Kg',
        images: [
            {
                url: '/img/logo.jpg',
                width: 600,
                height: 630,
                alt: 'Unreal Kg Logo',
            },
        ],
    },
    icons: {
        icon: "/img/favicon.ico",
        shortcut: "/img/favicon-32x32.png",
        apple: "/img/apple-touch-icon.png",
    },

    creator: "Nevo Devs",
    publisher: "Nevo Devs",
    applicationName: "Unreal Kg",
    authors: [{name: "Nevo Devs"}],
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="Gmk_Ix8uZgaUSJfvlF4QtbcWnafdPdpg1fT85UH0W6U"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Infant&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
