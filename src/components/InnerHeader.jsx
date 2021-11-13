import React from 'react'

export default function InnerHeader() {
    return (
        <div className="h-96 w-full text-primary flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="text-center">
                <h6 className="font-bold text-lg text-white opacity-70">ALL YOUR TV IN ONE PLACE</h6>
                <h1 className="text-white font-medium text-lg md:text-2xl mt-2">Watch thousands of shows and movies, with plans starting at $5.99/month.</h1>
                <h1 className="text-white text-sm md:text-base mt-2">HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</h1>
                <button className="bg-white text-black font-bold text-xs sm:text-sm py-2  px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6  mt-5 rounded hover:bg-opacity-75 transition-colors">START YOUR FREE TRIAL</button>
                <small className="text-white text-opacity-75 block mt-4">Free trial for new & eligible returning subscribers only.</small>
            </div>
        </div>
    )
}
