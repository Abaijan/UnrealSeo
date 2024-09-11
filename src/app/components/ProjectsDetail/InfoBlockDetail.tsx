import React from 'react';

// Определяем интерфейс для пропсов
interface InfoBlockDetailProps {
    data: {
        banner: string;
        banner3: string;
        description: string;
        video_url: string;
        name: string;
        banner2?: string; // Добавьте, если нужно
        description3?: string; // Добавьте, если нужно
        // Добавьте другие поля по необходимости
    };
}

// Компонент с типизацией пропсов
export const InfoBlockDetail: React.FC<InfoBlockDetailProps> = ({ data }) => {
    return (
        <section className="container px-[20px] mb-[50px] text-releway">
            <div className="flex gap-[40px]">
                <img className="w-[50%] h-full object-cover" src={data.banner2} alt="Banner" />
                <div className="max-w-[40%]">
                    <p className="text-[12px] lg:text-[18px] font-raleway">{data.description3}</p>
                </div>
            </div>
        </section>
    );
};
