import React from 'react';

import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';

import './movieContainer.css';

class MovieContainer extends React.Component{
    render(){
        return (
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter />
                    <SearchSorter />
                </div>
                
            </div>
            );
    }
} 

export default MovieContainer;