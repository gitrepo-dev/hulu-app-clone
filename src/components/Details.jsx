import React from 'react'

export default function Details({ data }) {

    return (
        <div className="container mx-auto mb-10 md:mb-20 px-5 md:px-0">
            <div className="mt-10 md:mt-20">
                <h1 className="text-white font-medium">About this Movie</h1>
                <h1 className="text-primary font-medium text-2xl md:text-3xl my-3">{data.title}</h1>

                <h1 className="text-gray-300 text-base"><span className="font-medium">Tagline</span>: {data.tagline !== "" ? data.tagline : "Not avalible"}</h1>
                <h1 className="text-white text-base mt-2">
                    <span className="font-medium">Genres </span> :
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
                <h1 className="text-gray-300 text-base md:w-3/5 mt-3 mb-3">{data.overview}</h1>
                <h1 className="text-gray-300 text-base my-2"><span className="font-medium">Released</span>  : {data.release_date}</h1>
                <h1 className="text-gray-300 text-base mb-2"><span className="font-medium">Budget</span>  : {data.budget}</h1>
            </div>
        </div>
    )
}
