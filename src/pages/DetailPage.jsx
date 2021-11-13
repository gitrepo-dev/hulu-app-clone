import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import Details from '../components/Details'
import Footer from '../components/Footer'

export default function DetailPage({ match: { params: { id } } }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <>
            <DetailHeader data={data} />
            <Details data={data} />
            <Footer />
        </>
    )
}
