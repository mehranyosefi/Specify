import SpecHeader from './components/SpecHeader.tsx'
import SpecFooter from './components/SpecFooter.tsx'
import DesignMovie from './components/DesignMovie.tsx'
import './assets/styles/components/App.scss'
import SpecButton from './components/SpecButton'
import { AutoPlaySlider, InfinitAnimation, StudyCases } from './components/SpecSlider'
import { parserItems, setupt_output_description_items, productTeamItems, studyCasesItems, specifyLoveItems } from "./types"
import DesignTokenMovie from './components/DesignTokenMovie.tsx'
import EasySetupCard from './components/EasySetupCard.tsx'

function App() {
  return (
    <>
      <div className='root-element'>
        <div className='mx-auto lg:container'>
          <SpecHeader />
          <main className='max-w-full overflow-hidden'>
            <section className='specify-designsystem spec-container'>
              <div className='text-center mt-20'>
                <SpecButton
                  content="Saying Goodby: The End of Specify"
                  to="/sayGodbay"
                  className='rounded-3xl bg-white text-gray-dark !py-2 px-3 font-semibold !duration-500 hover:bg-gray-dark hover:text-white hover:border-gray-light'
                  append={<svg className='size-6 ml-2'>
                    <use className='size-6' href='/img/icons.svg#arrow-right'></use>
                  </svg>}
                ></SpecButton>
              </div>
              <h1 className='w-fit mx-auto text-6xl mt-12 font-bold text-center'>
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
              <DesignMovie />
              <div className='w-[380px] mx-auto md:hidden'>
                <img src='/img/engine-photo.avif' />
              </div>
            </section>
            <section className="specify-love mt-40">
              <h2 className='w-fit mx-auto text-white/80'>Specify is loved by</h2>
              <div>
                <AutoPlaySlider items={specifyLoveItems} className="mt-6" />
              </div>
            </section>
            <section className='specify-designtokens spec-container mt-60'>
              <h2 className='w-fit mx-auto text-5xl mt-12 font-bold text-center leading-[1.2]'>
                Taking design tokens to <br /> the next level
              </h2>
              <p className='text-center text-xl text-white/80 mt-12'>
                Specify helps you gain control of your design system across <br /> teams and products
              </p>
              <div className='text-center mt-10'>
                <SpecButton content="Read vision" to="#login"
                  className="border-gray-light px-6 pt-[.65rem] pb-[.8rem] rounded hover:bg-gray-light mx-auto font-semibold max-md:w-80 justify-center"
                ></SpecButton>
              </div>
              <DesignTokenMovie />
            </section>
            <section className='specify-studycases mt-52'>
              <StudyCases items={studyCasesItems} />
            </section>
            <section className='specify-setupoutput spec-container md:mt-60'>
              <h2 className='w-fit mx-auto text-5xl mt-12 font-bold text-center leading-[1.2]'>
                Easy setup and  <br /> instant output
              </h2>
              <p className='text-center text-lg text-white/80 mt-12'>
                Nothing has been more easy for designers and more <br /> customizable for developers
              </p>
              <div className='text-center mt-10'>
                <SpecButton content="Watch video" to="#login"
                  prepend={
                    <svg className='size-5 mr-2'><use className='size-5' href='/img/icons.svg#play'></use></svg>
                  }
                  className="border-gray-light px-3 pt-[.65rem] pb-[.8rem] rounded hover:bg-gray-light mx-auto font-semibold max-md:w-80 justify-center"
                ></SpecButton>
              </div>
              <div className='mt-20 flex flex-col lg:flex-row justify-center items-center '>
                <EasySetupCard
                  title='Sync your tokens'
                  description='Specify is natively compatible with Figma, GitHub, Notion, Raycast, and many more to come. Our REST API and CLI help you to connect even more.'
                  buttonTitle='Discover all parsers'
                  classes='lg:mr-2'
                >
                  <div className='text-center w-full  max-h-[228px] absolute bottom-[0] left-0'>
                    <img className='rounded-b-2xl w-full max-h-[228px]' src='/img/syncyourtokens.avif'></img>
                  </div>
                </EasySetupCard>

                <EasySetupCard
                  title='Customize outputs'
                  description='Specify’s open source parsers help you generate design tokens and assets that match your company standards.'
                  buttonTitle='Discover all available apps'
                  classes='lg:ml-2 max-lg:mt-12'
                >
                  <div className='overflow-x-hidden max-w-full absolute left-0 bottom-0 mb-4'>
                    <InfinitAnimation items={parserItems.firstRow} />
                    <InfinitAnimation items={parserItems.secondRow} classes='relative -left-[867px] mt-3' animationType='animate-scroll-right' />
                    <InfinitAnimation items={parserItems.thirdRow} classes='mt-3' />
                    <InfinitAnimation items={parserItems.FourthRow} classes='relative -left-[867px] mt-3' animationType='animate-scroll-right' />
                  </div>
                </EasySetupCard>
              </div>
              <div className='specify-setupoutput--description grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14 mt-20'>
                {setupt_output_description_items.map(item => {
                  return <div key={item.title}>
                    <div className='flex items-center'>
                      <img width="21" height="21" src={item.icon} />
                      <h5 className='font-semibold ml-1'>{item.title}</h5>
                    </div>
                    <p className='text-white/80 mt-2'>{item.description}</p>
                  </div>
                })}
              </div>
            </section>
            <section className='specify-trusted w-full md:w-[90%] mx-auto mt-96 relative max-w-full overflow-hidden'>
              <div className='absolute left-0 top-0 -bottom-3 flex flex-none flex-nowrap items-center w-full h-min min-h-[560px]'>
                <div className="absolute h-full w-full top-[calc(57%-100%/2)] left-[calc(50.00000000000002%-100%/2)] bg-purple rounded-2xl"></div>
                <div className="absolute w-full h-1/2 flex-none left-[calc(50.00000000000002%-100%/2)] top-[calc(25.00000000000002%-50%/2)] overflow-visible" style={{ background: "linear-gradient(rgb(198, 58, 248) 0%, rgba(198, 58, 248, 0) 100%)" }}></div>
                <div className="absolute w-full h-1/2 -bottom-[43px] left-[calc(50.00000000000002%-100%/2)] rounded-b-2xl"
                  style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(26, 29, 30) 100%)" }}></div>
                <div className="absolute left-[calc(50.00000000000002%-100%/2)] top-[calc(25.00000000000002%-50%/2)] w-full h-1/2 flex-none overflow-visible"
                  style={{ background: "linear-gradient(180deg, rgb(21, 23, 24) 0%, rgba(255, 255, 255, 0) 100%)" }}
                ></div>
                <div className='absolute -left-[32px] lg:-left-[65px] xl:-left-[79px] 2xl:-left-[94px]  -top-[300px] overflow-hidden w-[116%] h-[500px] blur-[40px] rounded-[999999px] bg-gray-dark'></div>
              </div>
              <div className='relative'>
                <h2 className='font-bold text-5xl text-center'>Trusted by product teams</h2>
                <p className='text-center mt-10 text-xl text-white/80 max-md:px-6'>Book your demo and start automating the distribution of your <br /> design — your team will love it.</p>
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
