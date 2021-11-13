import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import requests from '../utils/requests'

export default function Categories() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="bg-black py-10 md:py-20">
            <div className="container mx-auto px-5 md:px-0">
                <div className="flex items-center justify-center mb-20">
                    <div className="text-center">
                        <h1 className="text-primary font-medium text-md mb-4">INCLUDED IN ALL PLANS</h1>
                        <h1 className="text-white font-bold md:font-extrabold text-3xl lg:text-6xl mb-5">All The TV You Love</h1>
                        <h1 className="text-white font-medium text-sm sm:text-lg md:text-base lg:text-2xl md:w-3/4 mx-auto">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</h1>
                    </div>
                </div>
                <Carousel
                    infinite={true}
                    draggable={true}
                    autoPlay={false}
                    autoPlaySpeed={5000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    responsive={responsive}
                    itemClass="carousel-item-padding-40-px"
                >
                    {

                        Object.entries(requests).map(([key, data]) => {
                            return (
                                <Link  to={`/genre/${data.id}`} key={key} className="relative overflow-hidden inline-block">
                                    <h1 className="absolute top-0 ml-8 mt-5 text-lg text-white mb-3 z-10">{data.title}</h1>
                                    <div className="">
                                        <img src={`${data.poster}`} width={400} height={600} className="object-contain shadow-lg" alt="" />
                                    </div>
                                    <div className="absolute top-0 bg-gradient-to-b from-[#0000005c] to-white-500 w-full h-full cursor-pointer hover:transition-color duration-75 hover:opacity-40 hover:bg-primary">
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}
