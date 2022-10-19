import React, { useEffect, useState } from "react"
import "./movie-list.styles.css"
import { useParams } from "react-router-dom"
import MovieCard from "../movie-card/movie-card.component"
import axios from "axios"

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => setMovieList(response.data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie, idx) => (
                        <MovieCard movie={movie} key={idx} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList