import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";

import './movieDetails.css';

import { getMovie } from '../store/thunks';
import { getSelectedMovie } from '../store/selectors';

const MovieDetails = ({ movie, getMovie }) => {
    let { id } = useParams();

    useEffect(() => {
        if (!movie || movie.id !== parseInt(id, 10)) {
            getMovie(id);
        }
    }, [id]);

    return (
        <div className="movieDetails">
            <img src="/logo.png" alt="Application logo"></img>
            <div className="searchButtonContainer">
                <Link to={'/'}>
                    <img src="/search.png" alt="Search button"></img>
                </Link>
            </div>

            {
                movie
                    ? (
                        <>
                            <div className="poster">
                                <img 
                                    src={movie.poster_path} 
                                    alt="movie poster"
                                    onError={(e)=> {
                                        e.target.onerror = null; 
                                        e.target.src='/empty.png'
                                    }} />
                            </div>
                            <div className="content">
                                <span className="title">{movie.title}</span>
                                <span className="score">{movie.vote_average}</span>
                                <br />
                                <span className="year">{new Date(movie.release_date).getFullYear()}</span>
                                <span className="duration">{movie.runtime} min</span>
                                <br />
                                <span className="description">{movie.overview}</span>
                            </div>
                        </>
                    )
                    : ''
            }


        </div>
    );
};

const mapStateToProps = state => {
    const movie = getSelectedMovie(state);

    return { movie }
};

const mapDispatchToProps = dispatch => ({
    getMovie: (id) => dispatch(getMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);