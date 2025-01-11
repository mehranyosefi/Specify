import Slider from "react-slick"
import SpecButton from "./SpecButton"
import "/src/assets/styles/components/SpecSlider.scss"
// import type { PropsSpecifyLove } from "../types"
import type { StudyCasesItem } from "../types"
import { ReactNode } from "react"

export function AutoPlaySlider(props: { items: string[], settings?: object, style?: object, className?: string, children?: ReactNode | Element }) {
    const {
        settings = {
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: false,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },
            ]
        },
        style,
        className,
        items
    } = props

    return (
        <div className={`slider-container-lovedBy max-w-full overflow-hidden ${className}`} style={style}>
            <Slider {...settings}>
                {items.map((item: string) => {
                    return (
                        <div key={item}>
                            <a href={`#${item}`}>
                                <img src={item} alt={item} />
                            </a>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )

}

export function StudyCases(props: { items: StudyCasesItem[], settings?: object, style?: object, className?: string }) {
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

        },
        items,
        style,
        className
    } = props



    return (
        <div className={`slider-container-study ${className}`} style={style}>
            <Slider {...settings}>
                {items.map((item) => {
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

function Card(props: { title?: string, apps: string[], person: { name: string, role: string, description: string }, radiantColor: string }) {
    const { title, apps, person, radiantColor } = props;
    return (
        <div className="card">
            <div
                style={{
                    background: `radial-gradient(100% 90.5% at -4.7% -15.899999999999999%, ${radiantColor} 0%, rgb(21,23,24))`
                }}
            >
                <h3 className="text-3xl font-semibold">{title}</h3>
                <div className="mt-20 max-md:hidden">
                    <p className="text-white/60 text-lg">INTEGRATED APPS</p>
                    <div className="flex items-center justify-center mt-4">
                        {apps.map((item: string) => {
                            return <a key={item} href={`#{item}`} className="rounded-full size-10 flex items-center justify-center mx-1 transition-colors duration-200 hover:!bg-white hover:text-gray-dark" style={{ background: radiantColor }}>
                                <svg className="size-6">
                                    <use className="size-6" href={`/img/icons.svg#${item}`}></use>
                                </svg>
                            </a>
                        })}
                    </div>
                </div>
                <p className="mt-8 text-lg leading-8 md:hidden">{person.description}</p>
                <div className="md:hidden">
                    <h4 className="font-semibold text-lg max-md:mx-auto mr-auto max-md:mt-10">{person.name}</h4>
                    <p className="text-white/80 mt-2 text-lg max-md:m-auto mr-auto">{person.role}</p>
                </div>
                <SpecButton
                    content="Case study"
                    to="/sayGodbay"
                    className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light mt-14 w-full md:w-48 justify-center'
                    append={<svg className='size-6 ml-2'>
                        <use className='size-6' href='/img/icons.svg#arrow-right'></use>
                    </svg>}
                ></SpecButton>
            </div>
            <div className="p-10 max-md:hidden">
                <h4 className="font-semibold text-lg mr-auto">{person.name}</h4>
                <p className="text-white/80 mt-2 text-lg mr-auto">{person.role}</p>
                <p className="mt-8 text-lg leading-8">{person.description}</p>
            </div>
        </div>

    )
}

export function InfinitAnimation(props: { items: any[], animationType?: string, classes?: string }) {
    const { items, animationType = "animate-scroll-left", classes } = props
    return (
        <ul className={`flex items-center list-none w-[2200px] overflow-hidden ${classes || ''}`}>
            {[1, 2].map((_index) => (
                <li className={`flex ${animationType}`} key={_index}
                >
                    {items.map((item: { background: string; icon: string; text: string }) => (
                        <div key={`${_index}-${item.text}`} className='flex items-center rounded border border-gray-light flex-nowrap mx-2 min-w-fit px-2 py-[.45rem]'>
                            <div className='size-6 rounded text-center pt-[.1rem]' style={{ background: item.background }}>
                                <img className='size-5 m-auto' src={`/img/${item.icon}.svg`} />
                            </div>
                            <span className='ml-2'>{item.text}</span>

                        </div>
                    ))}
                </li>
            ))}
        </ul>
    )
}
