import React, { useEffect, useState } from 'react'
import InnerHeader from '../components/InnerHeader'
import MovieList from '../components/MovieList'
import Footer from '../components/Footer'

export default function Genre({match: {params: {id}} }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(({results})=>{
            setData(results)
        })
    }, [])

    return (
        <>
            <InnerHeader />
            <MovieList data={data} />
            <Footer />
        </>
    )
}
