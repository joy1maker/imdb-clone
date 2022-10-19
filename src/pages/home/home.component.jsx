
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movie-list/movie-list.component";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(response => setPopularMovies(response.data.results))
    }, [popularMovies])

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={500}
                infiniteLoop={true}
                showStatus={false}

            >
                {
                    popularMovies.map((movie, index) => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={index}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="poster" />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MovieList />
        </div>
    )
}
export default Home;