import React from 'react';

// Определяем интерфейс для пропсов
interface DetailsVideoComponentProps {
    data: {
        video_url?: string;
        banner2?: string;
    };
}

// Компонент с типизацией пропсов
export const DetailsVideoComponent: React.FC<DetailsVideoComponentProps> = ({ data }) => {
    return (
        <section className="container w-auto my-[100px] h-auto">
            {/* Изображение баннера перед видео */}
            <iframe
                className="w-full h-[200px]  md:h-[300px] lg:h-[400px] xl:h-[500px] mt-[-50px] relative z-10"
                src={data.video_url}
                allowFullScreen
                frameBorder="0"
            />
        </section>
    );
};
