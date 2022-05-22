import React from 'react'

export default function ContactUs() {


    return (
        <section id='contactUs'>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
                        Visit Us
                    </h2>
                </div>

                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: ' grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div class="lg:w-1/2 px-6">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p class="mt-1">Ghagra,Pubodhola,Netrokona,Bangladesh-2410</p>
                                </div>
                                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a class="text-indigo-500 leading-relaxed">ishaqrabbu97@gmail.com</a>
                                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p class="leading-relaxed">+8801985257752</p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Message Us</h2>
                            <p class="leading-relaxed mb-5 text-gray-600">We will get back to you as soon as possible</p>
                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}
