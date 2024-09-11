import React from 'react'

export const DetailsVideoComponent = (data : object) => {
    return (
        <section className="container w-auto h-auto mb-[50px]">
            <iframe className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] "
                    src={data.data.video_url}>
                    title="YouTube video player"
                    poster={data.data.banner2}
                    allowFullScreen
            </iframe>
        </section>
    )
}