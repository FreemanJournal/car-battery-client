import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../utilities/Loader';

export default function Blog() {
    const { isLoading, error, data } = useQuery('blog', () => axios(`${process.env.REACT_APP_SERVER_URI}/blog`).then(({ data }) => data))

    if (isLoading) return <Loader/>
   
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
                        Our Blog
                    </h2>
                </div>
                <section class="text-gray-600 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-12">
                            {
                                data?.map((blog, index) => (
                                    <div class="px-12 md:w-1/2 flex flex-col items-start" key={index}>
                                        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blog.q}</h2>
                                        <p class="leading-relaxed mb-8">{blog.a}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
