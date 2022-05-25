import React from 'react'

export default function NotFound() {
    return (

        <div className="bg-teal-400 relative overflow-hidden h-screen">
            
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-slate-700 leading-tight mt-4">
                        This page is not found!
                    </h1>
                    <p className="font-extrabold text-8xl my-44 text-slate-700 animate-bounce">
                        404
                    </p>
                </div>
            </div>
        </div>

    )
}
