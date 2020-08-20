import React from 'react';

import CategoryFilter from './categoryFilter';

import './movieContainer.css';

class MovieContainer extends React.Component{
    render(){
        return (
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter />
                </div>
                
            </div>
            );
    }
} 

export default MovieContainer;