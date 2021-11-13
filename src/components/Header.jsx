import React from 'react'

export default function Header() {
    return (
        <div className="bg-home-banner bg-cover h-96 lg:h-banner w-full text-primary flex items-center justify-center bg-fixed">
            <div className="text-center w-4/5 sm:w-full md:w-11/12 lg:w-full">
                <h6 className="font-medium text-sm">TRY UP TO ONE MONTH FREE</h6>
                <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-9xl text-primary tracking-wider">hulu</h1>
                <h1 className="text-white font-medium text-lg md:text-2xl mt-2">Watch thousands of TV shows and movies.</h1>
                <h1 className="text-white text-sm md:text-base mt-2">HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</h1>
                <button className="bg-white text-black font-bold text-xs sm:text-sm py-2  px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-6  mt-5 rounded hover:bg-opacity-75 transition-colors">START YOUR FREE TRIAL</button>
                <small className="text-white text-opacity-75 block mt-4">Free trial for new & eligible returning subscribers only.</small>
            </div>
        </div>
    )
}
