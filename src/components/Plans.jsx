import React from 'react'

export default function Plans() {
    return (
        <div className="container mx-auto my-5 sm:my-10 md:my-20 px-5 md:px-10 lg:px-50">
            <div className="flex overflow-x-scroll lg:overflow-x-auto">
                <div className="min-w-1000 lg:w-full">
                    <div className="flex mb-10 w-full">
                        <div className="w-2/5">
                            <h1 className="text-2xl font-bold text-white">Select Your Plan</h1>
                            <p className="text-gray-300 my-2">No hidden fees, equipment rentals, or installation appointments.</p>
                            <p className="text-primary font-medium font-md">Switch plans or cancel anytime.**</p>
                        </div>
                        <div className="w-1/5 text-center">
                            <h1 className="text-2xl font-bold text-white">Hulu</h1>
                            <p className="text-gray-300 my-2">30 DAY FREE TRIAL
                            </p>
                            <button className="bg-white text-black font-medium px-5 rounded py-3 hover:bg-gray-200">TRY FOR $0</button>
                        </div>
                        <div className="w-1/5 text-center">
                            <h1 className="text-2xl font-bold text-white">Hulu (No Ads)
                            </h1>
                            <p className="text-gray-300 my-2">30 DAY FREE TRIAL
                            </p>
                            <button className="bg-white text-black font-medium px-5 rounded py-3 hover:bg-gray-200">TRY FOR $0</button>
                        </div>
                        <div className="w-1/5 text-center">
                            <h1 className="text-2xl font-bold text-white">Hulu + Live TV
                            </h1>
                            <p className="text-gray-300 my-2">30 DAY FREE TRIAL
                            </p>
                            <button className="bg-white text-black font-medium px-5 rounded py-3 hover:bg-gray-200">TRY FOR $0</button>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="w-2/5">
                            <ul className="list-none">
                                <li className="mb-3 md:mb-7">Price after free trial</li>
                                <li className="mb-3 md:mb-7">Streaming Library with thousands of TV episodes and movie</li>
                                <li className="mb-3 md:mb-7">Most new episodes the day after they air*
                                </li>
                                <li className="">Access to award-winning Hulu Originals
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5 text-center">
                            <ul className="list-none">
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl">&#10003;</li>
                            </ul>
                        </div>
                        <div className="w-1/5 text-center">
                            <ul className="list-none">
                                <li className="text-2xl mb-3 md:mb-7"></li>
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl"></li>
                            </ul>
                        </div>
                        <div className="w-1/5 text-center">
                            <ul className="list-none">
                                <li className="text-2xl mb-3 md:mb-7">&#10003;</li>
                                <li className="text-2xl mb-3 md:mb-7"></li>
                                <li className="text-2xl mb-3 md:mb-7"></li>
                                <li className="text-2xl">&#10003;</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
