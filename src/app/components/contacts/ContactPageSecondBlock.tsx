'use client';
import React, {useState} from "react";
import axios from "axios";

export const ContactPageSecondBlock = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post(
            `https://b24-y5md8j.bitrix24.ru/rest/1/6nbynbrtqldx9lt1/crm.lead.add.json?`,
            {
                FIELDS: {
                    NAME: name,
                    EMAIL: [{VALUE: email}],
                    TITLE: message,
                }
            }
        )
            .then((response) => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <section className="container">
            <div className="font-raleway flex flex-col justify-center items-start text-start xl:p-8">
                <h1 className="text-white text-[24px] font-bold mb-[30px]">
                    Let s get started!
                </h1>

                <div
                    className="p-8 rounded-lg shadow-lg bg-[white] text-[black] w-full h-auto xl:pt-[94px] xl:pl-[86px]">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-around items-start gap-6">
                        <div className="flex lg:grid grid-cols-2 flex-col w-full justify-between h-[100%]">
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="name">Имя</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    placeholder="Имя"
                                    className="lg:w-[326px] w-[100%] border border-gray-300 p-3 rounded-md"
                                />

                                <div className="mt-[40px]">
                                    <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="lg:w-[326px] w-[100%] border border-gray-300 p-3 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="flex xl:w-[519px] flex-col justify-start items-start h-[100%]">
                                <label className="text-lg font-medium mt-5 lg:mt-0 mb-2" htmlFor="request">Ваш
                                    запрос</label>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="request"
                                    placeholder="Напишите свой запрос"
                                    className="w-[100%] h-[178px] border border-gray-300 p-3 rounded-md resize-none"
                                ></textarea>

                                <p className="mt-6 text-gray-600 text-sm w-[300px] md:w-[320px] text-start">
                                    Пожалуйста, ознакомьтесь с нашей{" "}
                                    <a href="#" className="text-[#FF00F5] underline">политикой конфиденциальности</a>
                                    и политикой использования файлов{" "}
                                    <a href="#" className="text-[#FF00F5] underline">cookie</a>, чтобы вы поняли, как мы
                                    собираем и используем ваши персональные данные.
                                </p>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="lg:mt-0 bg-[#85FF01] text-[black] font-bold py-3 px-6 rounded-md shadow-md transition-colors mt-[100px]"
                                    onClick={() => console.log(email, name, message)}
                                >
                                    ОТПРАВИТЬ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

