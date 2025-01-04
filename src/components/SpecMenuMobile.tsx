import { forwardRef, useRef } from "react"

const SpecMenuMobile = forwardRef((props, ref) => {
    const menu = useRef<HTMLElement | null>(null)
    function toggleMenu(entry) {
        console.log(menu.current!.offsetHeight)
        if (menu.current.offsetHeight === 0) {
            let val = 0;
            let interval = setInterval(() => {
                if (val >= 100) clearInterval(interval)

                else {
                    val++
                    // menu.current.style.height = `calc(${val}% - 50px)`
                    menu.current.style.height = `${val}%`
                }

            }, 1)
        } else {
            console.log('no')
        }

    }
    // requestAnimationFrame(toggleMenu);
    ref!.current = toggleMenu;
    return (
        <menu ref={menu} className="menu--mbile fixed h-0 w-full z-40 bg-red-200 overflow-hidden">

            df
        </menu>
    )
})


export default SpecMenuMobile