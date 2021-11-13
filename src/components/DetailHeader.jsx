import React from 'react'

export default function DetailHeader({ data }) {
    return (
        <div className="bg-cover bg-top  h-96 lg:h-banner w-full bg-fixed relative" style={{ backgroundImage: `linear-gradient(90deg, rgba(185,10,49,0.9) 30%, rgb(185, 10, 49, 0.08) 100%), url(${data.poster_path !== undefined ? process.env.REACT_APP_API_IMG_BASE_URL + data.poster_path || data.backdrop_path : "loading"})` }}>

            <div className="container mx-auto px-5 md:px-0">
                <div className="flex items-center h-96 lg:h-banner">
                    <div className="text-left">
                        <h1 className="text-white font-medium text-2xl sm:text-3xl mt-2">{data.original_title}</h1>
                        <h1 className="text-white text-base mt-2">
                            {

                                data.genres !== undefined ?
                                    data.genres.map((value, index) => {
                                        return (
                                            <span key={index} className="mr-3 ml-2 font-medium">
                                                {value.name} .
                                            </span>
                                        )
                                    }) : ""
                            }
                        </h1>
                        <h1 className="text-white text-base my-2 sm:w-96 w-72 truncate">{data.overview}</h1>
                        <button className="bg-white text-black font-bold text-xs sm:text-sm py-2  px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6  mt-5 rounded hover:bg-opacity-75 transition-colors">START YOUR FREE TRIAL</button>
                        <small className="text-white text-opacity-75 block mt-4">Free trial for new & eligible returning subscribers only.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
