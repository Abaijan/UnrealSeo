import React from "react";

export const AboutUsAfterSixBlock = () => {
    const background = "#D987FF";

    return (
        <section className="container pb-[200px]">
            <div className="flex flex-col xl:flex-row xl:gap-[40px] relative">
                <div>
                    <img src="/img/image 49.png" alt="eyes" className="w-full h-auto" />
                </div>
                <div
                    className="xl:h-[882px] w-[153px] xl:mt-0 mt-[-100px] ml-[60%] xl:ml-0 md:ml-[60%] md:h-[500px] md:w-[270px] h-[300px] xl:w-[405px] p-[30px] xl:pr-[50px]"
                    style={{ backgroundColor: background }}
                >
                    <p className="font-Raleway text-black text-[12px] leading-6">
                        Our goal is to create a new, data-oriented approach. We improve our
                        clients marketing results with innovative strategies.
                    </p>
                </div>
                <div className="absolute xl:relative xl:top-auto xl:left-auto xl:w-[847px] xl:top-[600px] lg:top-[1000px] md:top-[750px] top-[500px]">
                    <h3 className="font-raleway text-[34px] lg:text-[54px] leading-[40px] lg:leading-[4rem] font-bold">
                        “We are passionate about creating visually stunning designs and
                        providing excellent service to our clients.”
                    </h3>
                </div>
            </div>
        </section>
    );
};
