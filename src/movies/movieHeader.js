import React from 'react';

import './movieHeader.css';

class MovieHeader extends React.Component{
    render(){
        return (
            <div className="movieHeader">
                <img src="logo.png" alt="Application logo"></img>
                <div className="addMovieContainer"><button >+ Add movie</button></div>

                <div className="headerText">
                    Find your movie
                </div>
                <form className="searchForm">
                    <input className="searchInput" type="text" placeholder="What do you want to watch?"></input>
                    <button className="searchButton">Search</button>
                </form>
            </div>
        );
    }
} 

export default MovieHeader;