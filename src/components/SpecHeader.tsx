import "@/assets/styles/components/SpecHeader.scss"
import SpecMenu from "@/components/SpecMenu";
import SpecButton from "@/components/SpecButton";
import SpecMenuMobile from "@/components/SpecMenuMobile";
import { useRef } from "react";
// import { useWindowProperty } from "@/utility"
function SpecHeader() {

    const menuMobile = useRef(null)
    function handleMenuMobile() {
        if (menuMobile.current) {
            menuMobile.current('hi')
        }
    }
    return (
        <>
            <div className='bg-gray-dark sticky top-0 z-30 max-w-full overflow-hidden max-lg:px-5'>
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
                        <SpecButton className="border-none !shadow-none md:!hidden"
                            content={<svg className="size-10"
                                onClick={handleMenuMobile}
                            >
                                <use className="size-10" href={`/src/assets/img/icons.svg#menu`}></use>
                            </svg>}
                        />
                        {/* {isOnMobile ? <span>true</span> : <span>false</span>} */}
                    </div>
                </header>
            </div>
            {/* <SpecMenuMobile ref={menuMobile} /> */}
        </>
    )
}

export default SpecHeader

