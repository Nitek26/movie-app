import React from 'react';

import './movieDetails.css';

const MovieDetails = (props) => {
    return (
        <div className="movieDetails">
            <img src="logo.png" alt="Application logo"></img>
            <div className="searchButtonContainer">
                <img src="search.png" alt="Search button" onClick={() => props.selectMovie()}></img>
            </div>
        </div>
    );
};

export default MovieDetails;