import { useState } from "react";
import "/src/assets/styles/components/SpecMenu.scss"
function SpecMenu() {
    const [solutionsSubMenuActive, setSolutionsSubMenuActive] = useState(false);
    const [resourcesSubMenuActive, setResourcesSubMenuActive] = useState(false);
    function handleOver(entry: string) {
        if (entry === 'solutions')
            setSolutionsSubMenuActive(true)
        else if (entry === 'resources') setResourcesSubMenuActive(true)
    }


    return (
        <menu className="menu">
            <li onMouseOver={() => handleOver('solutions')} onMouseLeave={() => setSolutionsSubMenuActive(false)}
                onClick={() => handleOver('solutions')} onBlur={() => setSolutionsSubMenuActive(false)}
                className="group/solutions"
            >
                <span>
                    Solutions
                    <svg className="size-5 mt-1 transition-all duration-300 group-hover/solutions:rotate-180">
                        <use className="size-5" href="/img/icons.svg#arrow-down-rounded"></use>
                    </svg>
                </span>
                {solutionsSubMenuActive && <div className="menu__sub flex items-start -right-4 py-4 px-5">
                    <div>
                        <span>For whom</span>
                        <div className="flex mt-2">

                            <a href="#Designers" className="rounded-xl w-40 h-36 bg-blue-dark relative overflow-hidden group">
                                <span className="inline-block p-2">Designers</span>
                                <img src="/img/designer-puzzle.avif" className="absolute -left-2 -bottom-1 size-16 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/img/designer-waiting.avif" className="absolute size-20 -right-2 bottom-0 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/img/designer-alpha.webp" className="absolute size-10 -bottom-3 left-14 transition-all ease-linear duration-[350ms] group-hover:bottom-1" />
                            </a>

                            <a href="#Developers" className="rounded-xl w-40 h-36 bg-green-dark ml-2 relative overflow-hidden group">
                                <span className="inline-block p-2">Developers</span>
                                <img src="/img/developers-react.avif" className="absolute -left-1 bottom-1 size-10 transition-all ease-linear duration-[350ms] group-hover:bottom-4" />
                                <img src="/img/developers-github.avif" className="absolute size-20 -right-2 bottom-0 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/img/developers-dollar.avif" className="absolute size-16 -bottom-3 left-7 transition-all ease-linear duration-[350ms] group-hover:bottom-1" />
                            </a>
                        </div>

                    </div>
                    <div className="ml-10">
                        <span className="font-bold">Products</span>
                        <ul className="list-none p-0 m-0">
                            <li className="my-4 text-white/80 hover:text-white">
                                <a className="flex items-center" href="#Documentaions">
                                    <svg className="size-5"><use className="size-5" href="/img/icons.svg#menu-book"></use></svg><span className="ml-2">Documentaions</span>
                                </a>
                            </li>
                            <li className="my-4 text-white/80 hover:text-white">
                                <a href="#Pars" className="flex items-center">
                                    <svg className="size-5"><use className="size-5" href="/img/icons.svg#sparss"></use></svg><span className="ml-2">Parsers</span>
                                </a>
                            </li>
                            <li className="my-4 text-white/80 hover:text-white group">
                                <a className="flex items-center" href="#SDTF">
                                    <svg className="size-5"><use className="size-5" href="/img/icons.svg#light-code"></use></svg><span className="ml-2">SDTF</span> <span className="inline-flex px-[.4rem] pb-[.15rem] ml-1 rounded-full bg-purple text-white h-[1.3rem] align-top items-center transition-colors group-hover:bg-white group-hover:text-gray-dark">new</span></a></li>
                            <li className="my-4 text-white/80 hover:text-white">
                                <a className="flex items-center" href="#Usecases">
                                    <svg className="size-5"><use className="size-5" href="/img/icons.svg#view-carousel"></use></svg><span className="ml-2">Use cases</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>}
            </li>
            <li onMouseOver={() => handleOver('resources')} onMouseLeave={() => setResourcesSubMenuActive(false)}
                onClick={() => handleOver('resources')} onBlur={() => setResourcesSubMenuActive(false)}
                className="group/resources"
            >
                <span>
                    Resources
                    <svg className="size-5 mt-1 transition-all duration-300 group-hover/resources:rotate-180">
                        <use className="size-5" href='/img/icons.svg#arrow-down-rounded'></use>
                    </svg>
                </span>
                {resourcesSubMenuActive && <div className="menu__sub text-white/80 px-677 right-12 min-w-[210px] px-5">
                    <ul>
                        <li className="my-4 hover:text-white">
                            <a className="flex items-center" href="#Blog">
                                <svg className="size-5"><use className="size-5" href="/img/icons.svg#view-page"></use></svg>
                                <span className="ml-2">Blog</span>
                            </a>
                        </li>
                        <li className="my-4 hover:text-white">
                            <a className="flex items-center" href="#Customer">
                                <svg className="size-5"><use className="size-5" href="/img/icons.svg#people-alt"></use></svg>
                                <span className="ml-2">Customer stories</span>
                            </a></li>
                        <li className="my-4 hover:text-white">
                            <a className="flex items-center" href="#Guide">
                                <svg className="size-5"><use className="size-5" href="/img/icons.svg#developer-guide"></use></svg>
                                <span className="ml-2">Guide</span>
                            </a>
                        </li>
                        <li className="my-4 hover:text-white">
                            <a className="flex items-center" href="#Documentation">
                                <svg className="size-5"><use className="size-5" href="/img/icons.svg#menu-book"></use></svg>
                                <span className="ml-2">Documentation</span>
                            </a>
                        </li>
                        <li className="my-4 hover:text-white">
                            <a className="flex items-center" href="#Helpcenter">
                                <svg className="size-5"><use className="size-5" href="/img/icons.svg#light-help-center"></use></svg>
                                <span className="ml-2">Help center</span>
                            </a>
                        </li>
                    </ul>
                </div>}
            </li>
            <li>
                <a href="#Pricing">Pricing</a>
            </li>
        </menu>
    )
}





export default SpecMenu