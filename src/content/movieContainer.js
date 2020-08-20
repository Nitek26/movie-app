import React from 'react';

import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';

import './movieContainer.css';

class MovieContainer extends React.Component {
    state = {
        movies: [
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    };

    render(){
        return (
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter />
                    <SearchSorter />
                </div>
                <div className="searchCount">
                    <span>{this.state.movies.length}</span> movies found
                </div>
                
            </div>
            );
    }
} 

export default MovieContainer;