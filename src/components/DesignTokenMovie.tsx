import { useMemo, useRef, useState } from "react";
import type { DesignTokenMovies } from "src/types";
import { desingTokenMovieItems } from "../types"
import SpecButton from "./SpecButton";

function DesignTokenMovie() {
    const [designTokenMovies, setDesignTokenMovies] = useState<DesignTokenMovies>({
        unified: true,
        effortless: false,
        customizabl: false
    })

    const currentDesignTokenMovieName = useMemo(() => {
        return Object.keys(designTokenMovies).find((key) => designTokenMovies[key as keyof DesignTokenMovies])
    }, [designTokenMovies]);

    function handleActiveMovie(entry: keyof DesignTokenMovies): void {
        if (window.innerWidth < 1280) return
        const obj = { ...designTokenMovies }
        Object.keys(obj).forEach((key) => {
            if (key === entry) obj[key as keyof DesignTokenMovies] = true
            else obj[key as keyof DesignTokenMovies] = false
        })
        setDesignTokenMovies(obj)
    }

    function handleNextDesignTokenMovie(entry: string) {
        const keys: string[] = Object.keys(designTokenMovies)
        const nextKey = keys[(keys.indexOf(entry) + 1) % keys.length]
        handleActiveMovie(nextKey as keyof DesignTokenMovies)
    }



    function DesingTokenMovieItem({ handleClick }: { handleClick: (entry: keyof DesignTokenMovies) => void }) {
        const moveieRefs = useRef<{
            unified: HTMLVideoElement | null;
            effortless: HTMLVideoElement | null;
            customizabl: HTMLVideoElement | null;
        }>({
            unified: null,
            effortless: null,
            customizabl: null,
        })

        const [moviesOver, setMoviesOver] = useState({
            unified: true,
            effortless: true,
            customizabl: true,
        })
        function playMovie(entry: string): void {
            type MovieRefs = typeof moveieRefs.current;
            setMoviesOver({
                ...moviesOver,
                [entry]: false
            })
            moveieRefs.current[entry as keyof MovieRefs]?.setAttribute('controls', 'controls')
            moveieRefs.current[entry as keyof MovieRefs]?.play()
        }

        return (
            <>
                {desingTokenMovieItems.map((item) => {
                    return (
                        <li key={item.name} className={`hover:cursor-pointer max-xl:text-center max-xl:mb-28
                         ${item.name != 'customizabl' ? 'xl:border-b border-gray-light pb-5' : ''} ${item.name !== 'unified' ? 'mt-5' : ''}`}
                            onClick={() => handleClick(item.name as keyof DesignTokenMovies)}>
                            <span className={`font-semibold transition-colors duration-500 max-xl:text-white ${designTokenMovies[item.name as keyof DesignTokenMovies] && 'text-purple'}`}>
                                {item.title}
                            </span>
                            <p className='mt-2 text-white/80'>{item.description}</p>
                            <div className='relative xl:hidden'>
                                <video ref={el => moveieRefs.current[item.name as keyof typeof moveieRefs.current] = el} className='w-full rounded-2xl mt-5' src={`/video/${item.name}.mp4`}
                                    playsInline
                                ></video>
                                {moviesOver[item.name as keyof DesignTokenMovies] && <div className={`absolute left-0 top-0 right-0 w-full h-full bg-gray-dark/60 flex items-center justify-center xl:hidden`} style={{
                                    boxShadow: "rgba(0, 0, 0, 0.08) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 16px 32px 0px"
                                }}>
                                    <SpecButton className='rounded-3xl  py-2 px-3 bg-gray-dark border-none !shadow-none' content={
                                        <>
                                            <svg className='size-7 text-white'><use className='size-7' href='/img/icons.svg#play-circle'></use></svg>
                                            <span className='ml-[.1rem] font-semibold'>Play</span>
                                        </>
                                    }
                                        onButtonClick={() => playMovie(item.name)}
                                    />
                                </div>}
                            </div>
                        </li>
                    )
                })}
            </>
        )
    }

    return (
        <div className='flex mt-24'>
            <ul className='w-full md:w-[570px] xl:w-[38%] mx-auto  p-0 m-0 list-none'>
                <DesingTokenMovieItem handleClick={handleActiveMovie} />
            </ul>
            <div className='w-[60%] ml-[2%] hidden xl:block'>
                <div className='frame p-5 w-[700px] h[380px]'>
                    <video className='w-full rounded-2xl animate-init' src={`/video/${currentDesignTokenMovieName}.mp4`} autoPlay playsInline muted
                        onEnded={() => handleNextDesignTokenMovie(currentDesignTokenMovieName as string)}
                    ></video>
                </div>
            </div>
        </div>
    );
}

export default DesignTokenMovie;