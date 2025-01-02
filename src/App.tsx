import { useState, useMemo } from 'react'
import SpecHeader from '@/components/SpecHeader.tsx'
import SpecFooter from '@/components/SpecFooter.tsx'
import '@/assets/styles/components/App.scss'
import SpecButton from './components/SpecButton'
import { AutoPlaySpecifyLove, StudyCases } from '@/components/SpecSlider.tsx'
import type { DesignTokenMovies } from "@/types"
import { parserItems, setupt_output_description_items, productTeamItems } from "@/types"


function App() {
  const [secondvideo, setSecondvideo] = useState(false)
  setTimeout(() => {
    setSecondvideo(true)
  }, 4000);

  const [designTokenMovies, setDesignTokenMovies] = useState<DesignTokenMovies>({
    unified: true,
    effortless: false,
    customizabl: false
  })

  const currentDesignTokenMovieName = useMemo(() => {
    return Object.keys(designTokenMovies).find((key) => designTokenMovies[key as keyof DesignTokenMovies])
  }, [designTokenMovies]);

  function handleActiveMovie(entry: keyof DesignTokenMovies): void {
    const obj = { ...designTokenMovies }
    Object.keys(obj).forEach((key) => {
      if (key === entry) obj[key as keyof DesignTokenMovies] = true
      else obj[key as keyof DesignTokenMovies] = false
    })
    setDesignTokenMovies(obj)
  }
  function handleNextDesignTokenMobie(entry: string) {
    const keys: string[] = Object.keys(designTokenMovies)
    const nextKey = keys[(keys.indexOf(entry) + 1) % keys.length]
    handleActiveMovie(nextKey as keyof DesignTokenMovies)
  }

  return (
    <>
      <div className='root-element'>
        <div className='mx-auto container'>
          {/* lg:max-w-[1000px] xl:max-w-[1150px] */}
          <SpecHeader />
          <main>
            <section className='specify-designsystem spec-container'>
              <div className='text-center mt-20'>
                <SpecButton
                  content="Saying Goodby: The End of Specify"
                  to="/sayGodbay"
                  className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light'
                  append={<svg className='size-6 ml-2'>
                    <use className='size-6' href='/src/assets/img/icons.svg#arrow-right'></use>
                  </svg>}
                ></SpecButton>
              </div>
              <h1 className='w-fit mx-auto text-6xl mt-12 font-bold'>
                <span style={{
                  backgroundImage: 'linear-gradient(270deg, rgb(110, 86, 207) 0%, rgb(249, 209, 255) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>Your Design Token Engine</span>
              </h1>
              <p className='text-center text-lg text-white/80 mt-12'>
                Flexible and powerful, Specify makes it easy to build the exact <br />
                Design Token workflow your Design System needs.
              </p>
              <div className="fram relative mt-12">
                <video className='relative z-10 cursor-auto w-full rounded-none block object-cover bg-[rgba(0, 0, 0, 0)]' src="/src/assets/video/jm7WGkaOefOXB61tZjv7cUhEsVE.webm" autoPlay muted playsInline
                  style={{
                    objectPosition: "50% 50%"
                  }}
                ></video>
                <div className='fading absolute left-0 top-0 right-0 bottom-0'>
                  <div className='absolute size-full z-10' style={{
                    background: 'radial-gradient(71.875% 69.4289% at 53.8393% 50%, rgba(21, 23, 24, 0) 63.244%, rgb(21, 23, 24) 100%)'
                  }}></div>
                  <div className='absolute h-[15%] w-full top-0 z-10 rotate-180'
                    style={{
                      background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 72.5%, rgba(21, 23, 24, 0.816) 84%, rgb(21, 23, 24) 94%)'
                    }}
                  ></div>
                  <div className='absolute h-[15%] w-full bottom-0 z-10'
                    style={{
                      background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 72.5%, rgba(21, 23, 24, 0.816) 84%, rgb(21, 23, 24) 94%)'
                    }}
                  ></div>
                  <div className='absolute h-[10%] w-[480px] -left-[230px] top-1/2 z-10 rotate-90'
                    style={{
                      background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 63%, rgba(21, 23, 24, 0.816) 80%, rgb(21, 23, 24) 95%)'
                    }}
                  ></div>
                  <div className='absolute h-[10%] w-[480px] -right-[230px] top-1/2 z-10 -rotate-90'
                    style={{
                      background: 'linear-gradient(rgba(21, 23, 24, 0) 0%, rgba(21, 23, 24, 0.1) 14.0625%, rgba(21, 23, 24, 0.32) 39.5833%, rgba(21, 23, 24, 0.66) 63%, rgba(21, 23, 24, 0.816) 80%, rgb(21, 23, 24) 95%)'
                    }}
                  ></div>
                </div>
                {secondvideo && <video className='absolute top-0 left-0' src="/src/assets/video/pSo8D917e0J1tbDXmiSXrdeHcY.mp4" autoPlay loop muted playsInline
                  style={{
                    cursor: "auto",
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    display: "block",
                    objectFit: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    objectPosition: "50% 50%"
                  }}
                ></video>}
              </div>
            </section>

            <section className="specify-love mt-12">
              <h2 className='w-fit mx-auto text-white/80'>Specify is loved by</h2>
              <div>
                <AutoPlaySpecifyLove className="mt-6" />
              </div>
            </section>
            <section className='specify-designtokens spec-container mt-60'>
              <h2 className='w-fit mx-auto text-5xl mt-12 font-bold text-center leading-[1.2]'>
                Taking design tokens to <br /> the next level
              </h2>
              <p className='text-center text-lg text-white/80 mt-12'>
                Specify helps you gain control of your design system across <br /> teams and products
              </p>
              <div className='text-center mt-10'>
                <SpecButton content="Read vision" to="#login"
                  className="border-gray-light px-6 pt-[.65rem] pb-[.8rem] rounded hover:bg-gray-light mx-auto font-semibold"
                ></SpecButton>
              </div>
              <div className='flex mt-24'>
                <ul className='w-[38%] p-0 m-0 list-none'>
                  <li className='hover:cursor-pointer border-b border-b-gray-light pb-7' onClick={() => handleActiveMovie('unified')}>
                    <span className={`font-semibold transition-colors duration-500 ${designTokenMovies.unified && 'text-purple'}`}>
                      <p>Unified Design Language</p>
                    </span>
                    <p className='mt-2 text-white/80'>Centralize tokens from Figma Styles, Figma Variables, Tokens Studio, or your own JSON file and ensure a consistent design language across all your digital products. Specify supports over 50 token types.</p>
                  </li>
                  <li className='hover:cursor-pointer border-b border-b-gray-light pb-7 mt-5' onClick={() => handleActiveMovie('effortless')}>
                    <span className={`font-semibold transition-colors duration-500 ${designTokenMovies.effortless && 'text-purple'}`}>
                      <p>Effortless collaboration</p>
                    </span>
                    <p className='mt-2 text-white/80'>Specify provides a collaborative space where designers can sync design tokens, and developers can seamlessly integrate design tokens into their platform.</p>
                  </li>
                  <li className='hover:cursor-pointer mt-5' onClick={() => handleActiveMovie('customizabl')}>
                    <span className={`font-semibold transition-colors duration-500 ${designTokenMovies.customizabl && 'text-purple'}`}>
                      <p>Customizable workflows</p>
                    </span>
                    <p className='mt-2 text-white/80'>Tailor Specify to fit your team's unique workflow. No matter how specific your design and development processes are, our platform adapts to your needs.</p>
                  </li>
                </ul>
                <div className='w-[60%] ml-[2%]'>
                  <div className='frame p-5 w-[700px] h[380px]'>
                    <video className='w-full rounded-2xl animate-init' src={`/src/assets/video/${currentDesignTokenMovieName}.mp4`} autoPlay playsInline muted
                      onEnded={() => handleNextDesignTokenMobie(currentDesignTokenMovieName)}
                    ></video>
                  </div>
                </div>
              </div>
            </section>
            <section className='specify-studycases mt-52'>
              <StudyCases />
            </section>
            <section className='specify-setupoutput spec-container mt-60'>
              <h2 className='w-fit mx-auto text-5xl mt-12 font-bold text-center leading-[1.2]'>
                Easy setup and  <br /> instant output
              </h2>
              <p className='text-center text-lg text-white/80 mt-12'>
                Nothing has been more easy for designers and more <br /> customizable for developers
              </p>
              <div className='text-center mt-10'>
                <SpecButton content="Watch video" to="#login"
                  prepend={
                    <svg className='size-5 mr-2'><use className='size-5' href='/src/assets/img/icons.svg#play'></use></svg>
                  }
                  className="border-gray-light px-3 pt-[.65rem] pb-[.8rem] rounded hover:bg-gray-light mx-auto font-semibold"
                ></SpecButton>
              </div>
              <div className='mt-20 flex flex-col lg:flex-row'>
                <div className='synctokens border rounded-2xl border-gray-light text-center mx-2 w-full lg:w-1/2'>
                  <div className='p-10'>
                    <h3 className='text-4xl font-semibold'>Sync your tokens</h3>
                    <p className='mt-4 text-white/80 text-xl'>
                      Specify is natively compatible with Figma, GitHub, Notion, Raycast, and many more to come. Our REST API and CLI help you to connect even more.
                    </p>
                  </div>
                  <SpecButton
                    content="Discover all available apps"
                    to="#overView"
                    className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light'
                    append={<svg className='size-6 ml-2'>
                      <use className='size-6' href='/src/assets/img/icons.svg#arrow-right'></use>
                    </svg>}
                  ></SpecButton>
                  <div className='mt-10 text-center'>
                    <img className='rounded-b-2xl' src='/src/assets/img/syncyourtokens.avif'></img>
                  </div>
                </div>
                <div className='synctokens border rounded-2xl border-gray-light text-center mx-2 w-full lg:w-1/2'>
                  <div className='p-10'>
                    <h3 className='text-4xl font-semibold'>Customize outputs</h3>
                    <p className='mt-4 text-white/80 text-xl'>
                      Specify’s open source parsers help you generate design tokens and assets that match your company standards.
                    </p>
                  </div>
                  <SpecButton
                    content="Discover all parsers"
                    to="#parsers"
                    className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light mt-8'
                    append={<svg className='size-6 ml-2'>
                      <use className='size-6' href='/src/assets/img/icons.svg#arrow-right'></use>
                    </svg>}
                  ></SpecButton>
                  <div className='mt-14 overflow-x-hidden'>
                    <ul className='flex items-center list-none w-[2000px] overflow-hidden'>
                      {[1, 2].map((_index) => (
                        <li className={`flex animate-scroll-left`} key={_index}
                        >
                          {parserItems.firstRow.map((item: { background: string; icon: string; text: string }) => (
                            <div key={`${_index}-${item.text}`} className='flex items-center rounded border border-gray-light flex-nowrap mx-2 min-w-fit px-2 py-[.45rem]'>
                              <div className='size-6 rounded text-center pt-[.1rem]' style={{ background: item.background }}>
                                <img className='size-5 m-auto' src={`/src/assets/img/${item.icon}.svg`} />
                              </div>
                              <span className='ml-2'>{item.text}</span>

                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                    <ul className='flex items-center list-none w-[2000px] overflow-hidden mt-3 relative -left-[867px]'>
                      {[1, 2].map((_index) => (
                        <li className={`flex animate-scroll-right`} key={_index}
                        >
                          {parserItems.secondRow.map((item: { background: string; icon: string; text: string }) => (
                            <div key={`${_index}-${item.text}`} className='flex items-center rounded border border-gray-light flex-nowrap mx-2 min-w-fit px-2 py-[.45rem]'>
                              <div className='size-6 rounded text-center pt-[.1rem]' style={{ background: item.background }}>
                                <img className='size-5 m-auto' src={`/src/assets/img/${item.icon}.svg`} />
                              </div>
                              <span className='ml-2'>{item.text}</span>

                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                    <ul className='flex items-center list-none w-[2000px] overflow-hidden mt-3'>
                      {[1, 2].map((_index) => (
                        <li className={`flex animate-scroll-left-2`} key={_index}
                        >
                          {parserItems.thirdRow.map((item: { background: string; icon: string; text: string }) => (
                            <div key={`${_index}-${item.text}`} className='flex items-center rounded border border-gray-light flex-nowrap mx-2 min-w-fit px-2 py-[.45rem]'>
                              <div className='size-6 rounded text-center pt-[.1rem]' style={{ background: item.background }}>
                                <img className='size-5 m-auto' src={`/src/assets/img/${item.icon}.svg`} />
                              </div>
                              <span className='ml-2'>{item.text}</span>

                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                    <ul className='flex items-center list-none w-[2000px] overflow-hidden mt-3 relative -left-[867px]'>
                      {[1, 2].map((_index) => (
                        <li className={`flex animate-scroll-right`} key={_index}
                        >
                          {parserItems.fourRow.map((item: { background: string; icon: string; text: string }) => (
                            <div key={`${_index}-${item.text}`} className='flex items-center rounded border border-gray-light flex-nowrap mx-2 min-w-fit px-2 py-[.45rem]'>
                              <div className='size-6 rounded text-center pt-[.1rem]' style={{ background: item.background }}>
                                <img className='size-5 m-auto' src={`/src/assets/img/${item.icon}.svg`} />
                              </div>
                              <span className='ml-2'>{item.text}</span>

                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='specify-setupoutput--description grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14 mt-20'>
                {setupt_output_description_items.map(item => {
                  return <div key={item.title}>
                    <h5 className='font-semibold ml-6'>{item.title}</h5>
                    <p className='text-white/80'>{item.description}</p>
                  </div>
                })}
              </div>
            </section>
            <section className='specify-trusted w-[90%] mx-auto mt-96 relative'>
              <div className='absolute left-0 top-0 -bottom-3 flex flex-none flex-nowrap items-center w-full h-min min-h-[560px]'>
                <div className="absolute h-full w-full top-[calc(57%-100%/2)] left-[calc(50.00000000000002%-100%/2)] bg-purple rounded-2xl"></div>
                <div className="absolute w-full h-1/2 flex-none left-[calc(50.00000000000002%-100%/2)] top-[calc(25.00000000000002%-50%/2)] overflow-visible" style={{ background: "linear-gradient(rgb(198, 58, 248) 0%, rgba(198, 58, 248, 0) 100%)" }}></div>
                <div className="absolute w-full h-1/2 -bottom-[43px] left-[calc(50.00000000000002%-100%/2)] rounded-b-2xl"
                  style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(26, 29, 30) 100%)" }}></div>
                <div className="absolute left-[calc(50.00000000000002%-100%/2)] top-[calc(25.00000000000002%-50%/2)] w-full h-1/2 flex-none overflow-visible"
                  style={{ background: "linear-gradient(180deg, rgb(21, 23, 24) 0%, rgba(255, 255, 255, 0) 100%)" }}
                ></div>
                <div className='absolute -left-[144px] -top-[300px] overflow-hidden w-[116%] h-[500px] blur-[40px] rounded-[1000px] bg-gray-dark/50'></div>
              </div>
              <div className='relative'>
                <h2 className='font-bold text-5xl text-center'>Trusted by product teams</h2>
                <p className='text-center mt-10 text-xl text-white/80'>Book your demo and start automating the distribution of your <br /> design — your team will love it.</p>
                <div className='relative overflow-hidden'>
                  <div className='specify-trusted--slider flex justify-start mt-16 w-[4163px]'>
                    {[1, 2].map((_index) => {
                      return (
                        productTeamItems.map(item => {
                          return <div className='rounded-xl w-[25rem] mx-[1.35rem] shadow p-8 animate-scroll-left-teams relative' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            key={item.title}
                          >
                            <div className='text-xl font-semibold'><span>{item.title}</span></div>
                            <div className='h-[160px]'>
                              <p className='mt-5 font-semibold'>{item.description}</p>
                            </div>
                            <div className='flex items-center mt-3'>
                              <img src={item.img}
                                className='rounded-xl size-12'
                                alt="" />
                              <div className='flex flex-col ml-3'>
                                <span className='font-bold'>{item.person.name}</span>
                                <span className=' text-white/80'>{item.person.role}</span>
                              </div>
                            </div>
                          </div>
                        })
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <SpecFooter />
        </div>
      </div>
    </>
  )
}
export default App
