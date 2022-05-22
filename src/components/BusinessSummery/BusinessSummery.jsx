import React from 'react'

export default function BusinessSummery() {
    const data = [
        {
            icon: "/images/value.png",
            title: "Customers",
            state: "10K+"
        },
        {
            icon: "/images/revenue.png",
            title: "Annual Revenue",
            state: "3M+"
        },
        {
            icon: "/images/rating.png",
            title: "Reviews",
            state: "3K+"
        },
        {
            icon: "/images/product.png",
            title: "Products",
            state: "30k+"
        },
    ]

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
                        We have served
                    </h2>
                </div>

                <section className="text-center">
                    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <ul className="grid grid-cols-2 gap-4 border-2 border-slate-600 rounded-xl lg:grid-cols-4">
                            {
                                data.map((item, i) => {
                                    return (<li className="p-8 flex flex-col justify-center items-center" key={i}>
                                        <img src={item.icon} alt="" className='w-24 h-24' />

                                        <p className="text-2xl font-extrabold text-pink-500">{item.state}</p>
                                        <p className="mt-1 text-lg font-medium text-slate-500">{item.title}</p>
                                    </li>)
                                })
                            }




                        </ul>
                    </div>
                </section>


            </div>
        </section>
    )
}
