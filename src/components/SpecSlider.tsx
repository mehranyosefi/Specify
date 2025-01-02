import Slider from "react-slick"
import SpecButton from "./SpecButton"
import "@/assets/styles/components/SpecSlider.scss"
import type { PropsSpecifyLove } from "@/types"
import { studyCasesItems } from "@/types"




export function AutoPlaySpecifyLove(props: PropsSpecifyLove) {
    const {
        settings = {
            dots: true,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        },
        style,
        className
    } = props

    return (
        <div className={`slider-container max-w-full overflow-hidden ${className}`} style={style}>
            <Slider {...settings}>
                <div>
                    <a href="#slider1">
                        <img src="/src/assets/img/specifyLove/slider1.svg" alt="slider1" />
                    </a>
                </div>
                <div>
                    <a href="#slider2">
                        <img src="/src/assets/img/specifyLove/slider2.svg" alt="slider2" />
                    </a>
                </div>
                <div>
                    <a href="#slider3">
                        <img src="/src/assets/img/specifyLove/slider3.svg" alt="slider3" />
                    </a>
                </div>
                <div>
                    <a href="#slider4">
                        <img src="/src/assets/img/specifyLove/slider4.svg" alt="slider4" />
                    </a>
                </div>
                <div>
                    <a href="#slider5">
                        <img src="/src/assets/img/specifyLove/slider5.svg" alt="slider5" />
                    </a>
                </div>
                <div>
                    <a href="#slider6">
                        <img src="/src/assets/img/specifyLove/slider6.svg" alt="slider6" />
                    </a>
                </div>
                <div>
                    <a href="#slider7">
                        <img src="/src/assets/img/specifyLove/slider7.svg" alt="slider7" />
                    </a>
                </div>
                <div>
                    <a href="#slider8">
                        <img src="/src/assets/img/specifyLove/slider8.svg" alt="slider8" />
                    </a>
                </div>
                <div>
                    <a href="#slider9">
                        <img src="/src/assets/img/specifyLove/slider9.svg" alt="slider9" />
                    </a>
                </div>
                <div>
                    <a href="#slider10">
                        <img src="/src/assets/img/specifyLove/slider10.svg" alt="slider10" />
                    </a>
                </div>
                <div>
                    <a href="#slider11">
                        <img src="/src/assets/img/specifyLove/slider11.svg" alt="slider11" />
                    </a>
                </div>
            </Slider>
        </div>
    )

}

export function StudyCases(props) {
    const {
        settings = {
            arrows: false,
            className: "center",
            centerMode: true,
            infinite: true,
            autoplay: true,
            variableWidth: true,
            // centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            autoplaySpeed: 10000,
            dots: true,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    speed: 1000,
                    dots: true,
                    slidesToScroll: 1,
                },
            ]
        },
        style,
        className
    } = props


    function Card(props) {
        const { title, apps, person, radiantColor } = props;
        return (
            <div className="card">
                <div className="text-center pt-14 pb-10"
                    style={{
                        background: `radial-gradient(100% 90.5% at -4.7% -15.899999999999999%, ${radiantColor} 0%, rgb(21,23,24))`
                    }}
                >
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    <div className="mt-20">
                        <p className="text-white/60 text-lg">INTEGRATED APPS</p>
                        <div className="flex items-center justify-center mt-4">
                            {apps.map((item) => {
                                return <a key={item} href={`#{item}`} className="rounded-full size-10 flex items-center justify-center mx-1 transition-colors duration-200 hover:!bg-white hover:text-gray-dark" style={{ background: radiantColor }}>
                                    <svg className="size-6">
                                        <use className="size-6" href={`/src/assets/img/icons.svg#${item}`}></use>
                                    </svg>
                                </a>
                            })}
                        </div>
                    </div>
                    <SpecButton
                        content="Case study"
                        to="/sayGodbay"
                        className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light mt-14 w-48 justify-center'
                        append={<svg className='size-6 ml-2'>
                            <use className='size-6' href='/src/assets/img/icons.svg#arrow-right'></use>
                        </svg>}
                    ></SpecButton>
                </div>
                <div className="p-10">
                    <h4 className="font-semibold text-lg mr-auto">{person.name}</h4>
                    <p className="text-white/80 mt-2 text-lg mr-auto">{person.role}</p>
                    <p className="mt-8 text-lg leading-8">{person.description}</p>
                </div>
            </div>

        )
    }

    return (
        <div className={`slider-container-study ${className}`} style={style}>
            <Slider {...settings}>
                {studyCasesItems.map((item) => {
                    return <Card key={item.id} title={item.title}
                        apps={item.apps}
                        person={item.person}
                        radiantColor={item.radiantColor}
                    />
                })}

            </Slider>
        </div>
    )
}