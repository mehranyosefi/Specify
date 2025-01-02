import "@/assets/styles/components/SpecHeader.scss"
import SpecMenu from "@/components/SpecMenu";
import SpecButton from "@/components/SpecButton";


function SpecHeader() {
    return (
        <div className='bg-gray-dark sticky top-0 z-30'>
            <header className="header">
                <div className='flex items-center justify-between'>
                    <section className='logo'>
                        <a href="/">Specify</a>
                    </section>
                    <section><SpecMenu></SpecMenu></section>
                    <section>

                        <SpecButton content="Sign in" to="/login"
                            className="border-gray-light px-4 pt-[.25rem] pb-[.4rem] rounded text-sm hover:bg-gray-light"
                        ></SpecButton>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default SpecHeader

