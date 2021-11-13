import React from 'react'
import Header from '../components/Header'
import BundleSection from '../components/BundleSection'
import Categories from '../components/Categories'
import Plans from '../components/Plans'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <BundleSection />
            <Categories />
            <Plans />
            <Footer />
        </>
    )
}
