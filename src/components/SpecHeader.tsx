import "../assets/styles/components/SpecHeader.scss"
import SpecMenu from "./SpecMenu";
import SpecButton from "./SpecButton";
import SpecMenuMobile from "./SpecMenuMobile";
import { useRef, useState } from "react";
interface RefObject {
    toggleMenu: (param: boolean) => void
}
function SpecHeader() {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState<boolean>(false)
    const menuMobile = useRef<RefObject>(null)

    function handleMenuMobile() {
        if (menuMobile.current) {
            setIsMobileMenuActive(!isMobileMenuActive)
            if (menuMobile.current) {
                menuMobile.current.toggleMenu(isMobileMenuActive)
            }
        }
    }
    return (
        <>
            <div className='bg-gray-dark sticky top-0 z-30 max-w-full'>
                <header className="header">
                    <div className='flex items-center justify-between'>
                        <section className='header--logo'>
                            <a href="/">Specify</a>
                        </section>
                        <section className="header--menu"><SpecMenu></SpecMenu></section>
                        <section className="header--sign">
                            <SpecButton content="Sign in" to="/login"
                                className="border-gray-light px-4 pt-[.25rem] pb-[.4rem] rounded text-sm hover:bg-gray-light"
                            ></SpecButton>
                        </section>
                        <SpecButton className="border-none !shadow-none md:!hidden transition-all duration-500"
                            content={<svg className="size-10"
                                onClick={handleMenuMobile}
                            >
                                <use className="size-10" href={`/src/assets/img/icons.svg#${!isMobileMenuActive ? 'menu' : 'close'}`}></use>
                            </svg>}
                        />
                        {/* {isOnMobile ? <span>true</span> : <span>false</span>} */}
                    </div>
                </header>
            </div>
            <SpecMenuMobile ref={menuMobile} />
            <hr className="text-gray-light" />
        </>
    )
}

export default SpecHeader

