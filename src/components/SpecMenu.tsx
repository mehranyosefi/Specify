import { useState } from "react";
import "@/assets/styles/components/SpecMenu.scss"
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
            >
                <span>
                    Solutions
                    <svg className="size-5 mt-1">
                        <use className="size-5" href="/src/assets/img/icons.svg#arrow-down-rounded"></use>
                    </svg>
                </span>
                {solutionsSubMenuActive && <div className="menu__sub flex items-start -right-4 py-4 px-5">
                    <div>
                        <span>For whom</span>
                        <div className="flex mt-2">

                            <a href="#Designers" className="rounded-xl w-40 h-32 bg-blue-dark relative overflow-hidden group">
                                <span className="inline-block p-2">Designers</span>
                                <img src="/src/assets/img/designer-puzzle.avif" className="absolute -left-2 -bottom-1 size-16 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/src/assets/img/designer-waiting.avif" className="absolute size-20 -right-2 bottom-0 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/src/assets/img/designer-alpha.webp" className="absolute size-10 -bottom-3 left-14 transition-all ease-linear duration-[350ms] group-hover:bottom-1" />
                            </a>

                            <a href="#Developers" className="rounded-xl w-40 h-32 bg-green-dark ml-2 relative overflow-hidden group">
                                <span className="inline-block p-2">Developers</span>
                                <img src="/src/assets/img/developers-react.avif" className="absolute -left-1 bottom-1 size-10 transition-all ease-linear duration-[350ms] group-hover:bottom-4" />
                                <img src="/src/assets/img/developers-github.avif" className="absolute size-20 -right-2 bottom-0 transition-all ease-linear duration-[350ms] group-hover:bottom-2" />
                                <img src="/src/assets/img/developers-dollar.avif" className="absolute size-16 -bottom-3 left-7 transition-all ease-linear duration-[350ms] group-hover:bottom-1" />
                            </a>
                        </div>

                    </div>
                    <div className="ml-10">
                        <span className="font-bold">Products</span>
                        <ul className="list-none p-0 m-0">
                            <li className="ml-3 my-2 text-white/80 hover:text-white"><a className="block" href="#Documentaions">Documentaions</a></li>
                            <li className="ml-3 my-2 text-white/80 hover:text-white"><a href="#Parsers">Parsers</a></li>
                            <li className="ml-3 my-2 text-white/80 hover:text-white group"><a className="block" href="#SDTF">SDTF <span className="inline-flex px-[.4rem] pb-[.15rem] ml-1 rounded-full bg-purple text-white h-[1.3rem] align-top items-center transition-colors group-hover:bg-white group-hover:text-gray-dark">new</span></a></li>
                            <li className="ml-3 my-2 text-white/80 hover:text-white"><a className="block" href="#Usecases">Use cases</a></li>
                        </ul>
                    </div>
                </div>}
            </li>
            <li onMouseOver={() => handleOver('resources')} onMouseLeave={() => setResourcesSubMenuActive(false)}
                onClick={() => handleOver('resources')} onBlur={() => setResourcesSubMenuActive(false)}
            >
                <span>
                    Resources
                    <svg className="size-5 mt-1">
                        <use className="size-5" href='/src/assets/img/icons.svg#arrow-down-rounded'></use>
                    </svg>
                </span>
                {resourcesSubMenuActive && <div className="menu__sub text-white/80 px-5 right-12">
                    <ul className="p-2">
                        <li className="my-2 hover:text-white"><a href="#Blog">Blog</a></li>
                        <li className="my-2 hover:text-white"><a href="#Customer">Customer</a> stories</li>
                        <li className="my-2 hover:text-white"><a href="#Guide">Guide</a></li>
                        <li className="my-2 hover:text-white"><a href="#Documentation">Documentation</a></li>
                        <li className="my-2 hover:text-white"><a href="#Helpcenter">Help center</a></li>
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