import { footerMenuItems } from "@/types"

function SpecFooter() {
    return (
        <footer className='mt-48 relative spec-container mb-10'>
            <hr className='text-gray-light'></hr>
            <div className="my-14">
                <ul className="flex justify-around items-start list-none">
                    {footerMenuItems.map((item) => {
                        return <li className="flex flex-col" key={item.category}>
                            <span className="font-semibold mb-2">{item.category}</span>
                            {item.items.map(i => {
                                return <a className="text-white/80 mt-3 text-sm hover:text-white transition-colors group" href={i.to} key={i.title}>
                                    {i.title}
                                    {i.title === 'STDF' && <span className="inline-flex px-[.4rem] pb-[.15rem] ml-1 rounded-full bg-purple text-white h-[1.3rem] align-top items-center transition-colors group-hover:bg-white group-hover:text-gray-dark">new</span>}
                                </a>
                            })}
                        </li>
                    })}
                </ul>
            </div>
        </footer>
    )
}


export default SpecFooter