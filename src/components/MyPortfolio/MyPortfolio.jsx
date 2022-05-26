import React from 'react'
import { SiReact, SiMongodb, SiTailwindcss } from 'react-icons/si'
export default function MyPortfolio() {


  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
            My Portfolio
          </h2>
        </div>
        <section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">

              <div className="flex flex-col text-center w-full bg-emerald-400 text-white py-5" style={{boxShadow:'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)'}}>
                <h1 className="text-5xl drop-shadow-2xl  title-font mb-4 font-bold">Md Ishaq</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">ishaqrabbu97@gmail.com</p>
              </div>
              <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto flex  flex-wrap">


                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-slate-100 text-slate-500 rounded-full inline-flex items-center justify-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24"><path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Technologies I Know</h2>


                        <div className="w-[20.2rem]">
                          <div className="p-2">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">

                              <SiReact className='mr-3 text-2xl text-teal-400' />

                              <span className="title-font font-medium">React js</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">

                              <SiMongodb className='mr-3 text-2xl text-emerald-400' />
                              <span className="title-font font-medium">Mongodb</span>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">

                              <SiTailwindcss className='mr-3 text-2xl text-sky-400' />
                              <span className="title-font font-medium">Tailwind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center w-[23.2rem] md:w-2/3  mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-slate-100 text-slate-500 rounded-full inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"></path></svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Projects</h2>
                        <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                          <li><a href='https://the-green-warehouse.web.app' target="_blank" rel="noreferrer" className="leading-relaxed hover:underline">THE GREEN WAREHOUSE</a></li>
                          <li><a href='https://better-call-soul.web.app' target="_blank" rel="noreferrer" className="leading-relaxed hover:underline">Better Call Saul</a></li>
                          <li><a href='https://dazzling-kheer-44e909.netlify.app' target="_blank" rel="noreferrer" className="leading-relaxed hover:underline">Modern Cloth Store</a></li>

                        </ul>

                      </div>
                    </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-24 h-24 bg-slate-100 text-slate-500 rounded-full inline-flex items-center justify-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24"><path d="M2 7v1l11 4 9-4V7L11 4z"></path><path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path></svg>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Education</h2>
                        <p className="leading-relaxed">Bachelor of Business Administration (2nd year)</p>
                      </div>
                    </div>
                  </div>


                </div>
              </section>
            </div>
          </section>
        </section>




      </div>
    </section>
  )
}
