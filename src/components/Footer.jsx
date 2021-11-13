import React from 'react'
import fb from "../images/facebook.png"
import tw from "../images/twitter.png"
import yt from "../images/youtube.png"


export default function Footer() {

    const ima = [fb, tw, yt]

    return (
        <div className="bg-mlight py-5 sm:py-10 lg:py-20">
            <div className="container mx-auto border-b-2 border-gray-300 pb-10 px-5 md:px-0">
                <div className="grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-6 xl:gap-6">
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3">BROWSE</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">Streaming Library</li>
                            <li className="mb-2">Live TV</li>
                            <li className="mb-2">Live News</li>
                            <li>Live Sports</li>
                        </ul>
                    </div>
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3 invisible">BROWSE</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">TV Shows</li>
                            <li className="mb-2">Movies</li>
                            <li className="mb-2">Original</li>
                            <li>Networks</li>
                        </ul>
                    </div>
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3 invisible">Browse</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">HBO</li>
                            <li className="mb-2">Cinemax</li>
                            <li className="mb-2">Showtime</li>
                            <li>STARZ</li>
                        </ul>
                    </div>
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3 invisible">BROWE</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">Disney</li>
                            <li className="mb-2">Hotstar</li>
                            <li className="mb-2">Netlife</li>
                            <li>Hobmi</li>
                        </ul>
                    </div>
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3">HELP</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">Account</li>
                            <li className="mb-2">Billing</li>
                            <li className="mb-2">Plans</li>
                            <li>Price</li>
                        </ul>
                    </div>
                    <div className="mb-2 sm:mb-4">
                        <h1 className="font-medium text-md text-black mb-3">ABOUT US</h1>
                        <ul className="list-none text-gray-500">
                            <li className="mb-2">Press</li>
                            <li className="mb-2">Jobs</li>
                            <li className="mb-2">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 md:px-0">
                <ul className="list-none flex items-center mt-5">
                    {
                        ima.map((value, i) => {
                            return (
                                <li key={i}><img alt="" width={20} height={30} src={value} className="mr-10 object-contain" /> </li>
                            )
                        })
                    }
                </ul>
                <small className="text-gray-500 inline-block mt-4">@2021 Hulu, LLC</small>
            </div>
        </div>
    )
}
