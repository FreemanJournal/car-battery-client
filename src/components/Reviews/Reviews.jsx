import React from 'react'
import TestimonialSlider from './Testimonial/TestimonialSlider'

export default function Reviews() {


  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white capitalize">
            Reviews
          </h2>
        </div>
       <div className="my-10">
       <TestimonialSlider />
       </div>



      </div>
    </section>
  )
}
