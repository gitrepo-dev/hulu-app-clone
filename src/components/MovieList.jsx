import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieList({data}) {

    return (
        <div className="container mx-auto mb-10 md:mb-20 px-5 md:px-0">
            <h1 className="text-white text-lg md:text-3xl font-medium my-5 sm:my-10 capitalize"></h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-6"> 
                {
                    data.map((value, index) => {
                        return (
                            <Link to={`/genre/movies/${value.id}`} key={index} className="my-6 md:inline-block">
                                <img src={`${process.env.REACT_APP_API_IMG_BASE_URL}${value.poster_path || value.backdrop_path}`} className="max-w-full h-auto" alt="" />
                                <h1 className="mt-4 text-primary font-mudium text-md">{value.title}</h1>
                                <h1 className=" text-gray-300 font-normal text-sm truncate w-full">{value.overview}</h1>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
