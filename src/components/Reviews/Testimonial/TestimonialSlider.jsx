import axios from "axios";
import React from "react";
import { RiDoubleQuotesL } from 'react-icons/ri';
import { useQuery } from "react-query";
import StarRatings from "react-star-ratings/build/star-ratings";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";




export default function TestimonialSlider() {
    const { isLoading, error, data: reviews } = useQuery('review', () => axios(`${process.env.REACT_APP_SERVER_URI}/review`).then(result => result.data))



    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",

                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-lg "
            >
                <div
                    slot="container-start"
                    className="parallax-bg bg-white text-slate-600"
                    style={{
                        background: 'rgb(25, 211, 174)',
                    }}
                // data-swiper-parallax="-23%"
                ></div>
                {
                    reviews?.map((item, index) => {
                        const { user, comment, rating } = item
                        return (
                            <SwiperSlide className="text-center" key={index}>

                                <div className="testimonial-card">
                                    <div className="sm:w-1/2 mx-auto">
                                        <i className=""> <RiDoubleQuotesL /> </i>
                                        <p className="text-slate-800 line-clamp-3">{comment}</p>
                                        <h5 className="font-bold font-mont text-slate-600">{user}</h5>
                                        <div className="text-yellow-400">
                                            {/* <Rating initialRating={rating} readonly fullSymbol={<RiStarFill className="" />} emptySymbol={<RiStarLine />} /> */}
                                            <StarRatings
                                                rating={rating}
                                                starRatedColor="rgb(250 204 21 / 1)"
                                                // changeRating={changeRating}
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension={'15px'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </>
    )
}
