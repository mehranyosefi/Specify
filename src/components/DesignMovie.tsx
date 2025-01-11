import { useState } from "react";

function DesignMovie() {
    const [secondvideo, setSecondvideo] = useState(false)
    setTimeout(() => {
        setSecondvideo(true)
    }, 4000);

    return (
        <div className="frame relative mt-12 hidden md:block max-w-full overflow-hidden">
            <video className='relative z-10 cursor-auto w-full rounded-none block object-cover bg-[rgba(0, 0, 0, 0)]' src="/video/jm7WGkaOefOXB61tZjv7cUhEsVE.webm" autoPlay muted playsInline
                style={{
                    objectPosition: "50% 50%"
                }}
            ></video>
            <div className='fading absolute left-0 top-0 right-0 bottom-0'>
                <div className='absolute size-full z-10' style={{
                    background: 'radial-gradient(71.875% 69.4289% at 53.8393% 50%, rgba(21, 23, 24, 0) 63.244%, rgb(21, 23, 24) 100%)'
                }}></div>
                <div className='absolute h-[15%] w-full top-0 z-10 rotate-180'
                    style={{
                        background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 72.5%, rgba(21, 23, 24, 0.816) 84%, rgb(21, 23, 24) 94%)'
                    }}
                ></div>
                <div className='absolute h-[15%] w-full bottom-0 z-10'
                    style={{
                        background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 72.5%, rgba(21, 23, 24, 0.816) 84%, rgb(21, 23, 24) 94%)'
                    }}
                ></div>
                <div className='absolute h-[10%] w-[480px] -left-[230px] top-1/2 z-10 rotate-90'
                    style={{
                        background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 63%, rgba(21, 23, 24, 0.816) 80%, rgb(21, 23, 24) 95%)'
                    }}
                ></div>
                <div className='absolute h-[10%] w-[480px] -right-[230px] top-1/2 z-10 -rotate-90'
                    style={{
                        background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 63%, rgba(21, 23, 24, 0.816) 80%, rgb(21, 23, 24) 95%)'
                    }}
                ></div>
            </div>
            {secondvideo && <video className='absolute top-0 left-0' src="/video/pSo8D917e0J1tbDXmiSXrdeHcY.mp4" autoPlay loop muted playsInline
                style={{
                    cursor: "auto",
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    display: "block",
                    objectFit: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    objectPosition: "50% 50%"
                }}
            ></video>}
        </div>
    )
}

export default DesignMovie;