import React from 'react'

export default function BundleSection() {
    return (
        <div className="bg-blue-gradient py-10">
            <div className="container mx-auto px-5 md:px-0">
                <div className="md:flex items-center justify-between">
                    <div className="md:flex items-center">
                        <h1 className="font-bold text-primary text-3xl tracking-wider mr-4">hulu</h1>
                        <h1 className="font-bold text-white text-2xl tracking-wider italic line-through	">ESPN </h1>
                        <div className="md:ml-10 my-5 md:my-0">
                            <h1 className="font-medium text-primary text-sm">BUNDLE WITH ANY HULU PLAN & SAVE</h1>
                            <h1 className="text-2xl text-white font-mudium my-2">Get Hulu, Disney+, and ESPN+.
                            </h1>
                            <p className="text-sm text-white underline">Details</p>
                        </div>
                    </div>
                    <button className="rounded border-2 border-white font-medium text-white py-2 px-4 text-sm sm:text-md sm:px-4 sm:py-3 md:text-base lg:py-3 lg:px-6 hover:opacity-75 transition-colors">
                        GET BUNDLE
                    </button>
                </div>
            </div>
        </div>
    )
}
