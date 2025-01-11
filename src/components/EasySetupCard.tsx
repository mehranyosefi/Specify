import SpecButton from "./SpecButton";
import type { EasySetupCard } from "src/types";
function EasySetupCard(props: EasySetupCard) {
    return (
        <div className='border rounded-2xl border-gray-light text-center mx-2 w-full lg:w-1/2 h-[585px] relative'>
            <div className='p-10 h-64'>
                <h3 className='text-4xl font-semibold'>{props.title}</h3>
                <p className='mt-4 text-white/80 text-xl'>
                    {props.description}
                </p>
            </div>
            <SpecButton
                content={props.buttonTitle}
                to="#overView"
                className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light w-80 justify-center'
                append={<svg className='size-6 ml-2'>
                    <use className='size-6' href='/img/icons.svg#arrow-right'></use>
                </svg>}
            ></SpecButton>
            {props.bottomSection}
        </div>
    );
}

export default EasySetupCard;