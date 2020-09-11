import React from 'react';

import './movieDetails.css';

const MovieDetails = (props) => {
    return (
        <div className="movieDetails">
            <img src="logo.png" alt="Application logo"></img>
            <div className="searchButtonContainer">
                <img src="search.png" alt="Search button" onClick={() => props.onSearchClicked()}></img>
            </div>
            <div className="poster">
                <img src={props.movie.poster_path} alt="movie poster" />
            </div>
            <div className="content">
                <span className="title">{props.movie.title}</span>
                <span className="score">{props.movie.vote_average}</span>
                <br />
                <span className="year">{new Date(props.movie.release_date).getFullYear()}</span>
                <span className="duration">{props.movie.runtime} min</span>
                <br />
                <span className="description">{props.movie.overview}</span>
            </div>
        </div>
    );
};

export default MovieDetails;