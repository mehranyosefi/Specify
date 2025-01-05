import { forwardRef, useRef, useState, useImperativeHandle, Ref } from "react"
import SpecButton from "./SpecButton"

interface RefObject {
    toggleMenu: (param: boolean) => void
}

const SpecMenuMobile = forwardRef((params, ref: Ref<RefObject>) => {
    console.log(params)
    const menu = useRef<HTMLElement | null>(null)

    useImperativeHandle(ref, () => ({ toggleMenu }))

    const [subMenu, setSubMenu] = useState({
        solutions: false,
        resources: false,
    })

    function toggleMenu(entry: boolean): void {
        if (!entry) {
            menu.current!.style.height = "calc(100% - 50px)"
        } else {
            menu.current!.style.height = "0px"
        }

    }
    function handleSubMenu(entry: string): void {
        type subMenu = typeof subMenu
        setSubMenu({
            ...subMenu,
            [entry]: !subMenu[entry as keyof subMenu]
        })
    }


    return (
        <menu ref={menu} className="menu--mbile md:hidden fixed w-full h-0 z-40 bg-gray-dark overflow-y-auto
        transition-all duration-300 ease-out border-b border-b-gray-light">
            <div className="px-5 py-10">
                <li>
                    <span className="inline-flex cursor-pointer" onClick={() => handleSubMenu('solutions')}>
                        <span className="text-3xl font-semibold">Solutions</span>
                        <svg className={`size-8 ml-1 transition-all duration-300 ${subMenu.solutions ? 'rotate-180' : ''}`}>
                            <use className="size-8" href="/img/icons.svg#arrow-down-rounded"></use>
                        </svg>
                    </span>
                    {subMenu.solutions && <ul className="transition-all duration-300">
                        <li className="p-3">
                            <h2 className="text-xl font-semibold">For whom</h2>

                            <a href="#designers" className="block relative rounded-xl bg-blue-dark group mt-5">
                                <div className="py-8 pl-5 text-xl font-semibold">
                                    Designers
                                </div>
                                <img src="/img/designer-puzzle.avif" className="absolute right-28 bottom-8 size-16 transition-all ease-linear duration-[350ms] group-hover:right-20" />
                                <img src="/img/designer-waiting.avif" className="absolute size-20 right-2 bottom-2 transition-all ease-linear duration-[350ms] group-hover:-right-1" />
                                <img src="/img/designer-alpha.webp" className="absolute size-10 -bottom-1 right-20 transition-all ease-linear duration-[350ms] group-hover:right-14" />
                            </a>
                            <a href="#designers" className="block relative rounded-xl bg-green-dark group mt-2">
                                <div className="py-8 pl-5 text-xl font-semibold">
                                    Developers
                                </div>
                                <img src="/img/developers-react.avif" className="absolute right-32 bottom-12 size-10 transition-all ease-linear duration-[350ms] group-hover:right-24" />
                                <img src="/img/developers-github.avif" className="absolute size-20 right-2 bottom-2 transition-all ease-linear duration-[350ms] group-hover:-right-1" />
                                <img src="/img/developers-dollar.avif" className="absolute size-16 -bottom-1 right-[5.5rem] transition-all ease-linear duration-[350ms] group-hover:right-16" />
                            </a>

                        </li>
                        <li className="p-3">
                            <div className="mt-5">
                                <span className="font-bold text-lg">Products</span>
                                <ul className="list-none p-0 m-0">
                                    <li className="my-4 text-white/80 hover:text-white">
                                        <a className="flex items-center" href="#Documentaions">
                                            <svg className="size-7"><use className="size-5=7" href="/img/icons.svg#menu-book"></use></svg><span className="ml-2 text-xl">Documentaions</span>
                                        </a>
                                    </li>
                                    <li className="my-4 text-white/80 hover:text-white">
                                        <a href="#Pars" className="flex items-center">
                                            <svg className="size-7"><use className="size-5=7" href="/img/icons.svg#sparss"></use></svg><span className="ml-2 text-xl">Parsers</span>
                                        </a>
                                    </li>
                                    <li className="my-4 text-white/80 hover:text-white group">
                                        <a className="flex items-center" href="#SDTF">
                                            <svg className="size-7"><use className="size-5=7" href="/img/icons.svg#light-code"></use></svg><span className="ml-2 text-xl">SDTF</span> <span className="inline-flex px-[.4rem] pb-[.15rem] ml-1 rounded-full bg-purple text-white h-[1.3rem] align-top items-center transition-colors group-hover:bg-white group-hover:text-gray-dark">new</span></a></li>
                                    <li className="my-4 text-white/80 hover:text-white">
                                        <a className="flex items-center" href="#Usecases">
                                            <svg className="size-7"><use className="size-5=7" href="/img/icons.svg#view-carousel"></use></svg><span className="ml-2 text-xl">Use cases</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    }
                </li>
                <li className="mt-10">
                    <span className="inline-flex cursor-pointer" onClick={() => handleSubMenu('resources')}>
                        <span className="text-3xl font-semibold">Resources</span>
                        <svg className={`size-8 ml-1 transition-all duration-300 ${subMenu.resources ? 'rotate-180' : ''}`}>
                            <use className="size-8" href="/img/icons.svg#arrow-down-rounded"></use>
                        </svg>
                    </span>
                    {subMenu.resources && <ul className="transition-all duration-[400ms] p-3">
                        <li className="my-4 text-white/80 hover:text-white">
                            <a className="flex items-center" href="#Blog">
                                <svg className="size-7"><use className="size-7" href="/img/icons.svg#view-page"></use></svg>
                                <span className="ml-2 text-xl">Blog</span>
                            </a>
                        </li>
                        <li className="my-4 text-white/80 hover:text-white">
                            <a className="flex items-center" href="#Customer">
                                <svg className="size-7"><use className="size-7" href="/img/icons.svg#people-alt"></use></svg>
                                <span className="ml-2 text-xl">Customer stories</span>
                            </a></li>
                        <li className="my-4 text-white/80 hover:text-white">
                            <a className="flex items-center" href="#Guide">
                                <svg className="size-7"><use className="size-7" href="/img/icons.svg#developer-guide"></use></svg>
                                <span className="ml-2 text-xl">Guide</span>
                            </a>
                        </li>
                        <li className="my-4 text-white/80 hover:text-white">
                            <a className="flex items-center" href="#Documentation">
                                <svg className="size-7"><use className="size-7" href="/img/icons.svg#menu-book"></use></svg>
                                <span className="ml-2 text-xl">Documentation</span>
                            </a>
                        </li>
                        <li className="my-4 text-white/80 hover:text-white">
                            <a className="flex items-center" href="#Helpcenter">
                                <svg className="size-7"><use className="size-7" href="/img/icons.svg#light-help-center"></use></svg>
                                <span className="ml-2 text-xl">Help center</span>
                            </a>
                        </li>
                    </ul>
                    }
                </li>

                <li className="mt-10"><a href="#pricing" className="text-3xl font-semibold">Pricing</a></li>
                <SpecButton content="Sign in" to="#login"
                    className="border-gray-light px-6 pt-[.65rem] pb-[.8rem] rounded hover:bg-gray-light mx-auto !flex font-semibold justify-center mt-16"
                ></SpecButton>
            </div>
        </menu>
    )
})


export default SpecMenuMobile