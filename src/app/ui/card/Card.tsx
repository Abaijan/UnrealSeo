import React from 'react';
import Image from "next/image";

interface CardProps {
    data: {
        id: string;
        image: string;
        name: string;
    };
}

export const Card: React.FC<CardProps> = ({ data }) => {
    const { image, name } = data; // Destructure data properties

    return (
        <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <Image src={image} alt={name} width={500} height={500} className="w-full h-auto object-cover rounded-md" />
            <div className='font-raleway font-medium text-[16px] flex flex-col text-start mt-[10px]'>
                <span>{name}</span> {/* Use data.name */}
                <span>3D video, Re branding</span>
                <span>(2023)</span>
            </div>
        </div>
    );
};
