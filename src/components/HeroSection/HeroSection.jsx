import React from 'react'

export default function HeroSection() {
    return (
        <section>
            <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                className="absolute inset-0 object-cover w-full h-full"
                                src="images\kumpan-electric-30D7430ywf4-unsplash (1).jpg"
                                alt="battery"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span
                            className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Best place to buy wholesale electric car's battery
                            </h2>

                            <p className="mt-4 text-gray-600">
                            Speed Battery Manufacturer Co, Ltd  is the leading manufacturer and wholesale seller of electric car battery in Bangladesh. 
                            When it comes to electric car's battery , you can rely on Speed Battery Tech’s expertise. The battery we supply is of profit yielding, high quality and long lasting. Speed Battery Tech can be your reliable and long term business partner.
                            </p>

                            <a
                                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded active:text-pink-500 hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring"
                                href="/contact"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
