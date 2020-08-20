import React from 'react';

import CategorySwitcher from './categorySwitcher';

import './movieContainer.css';

class MovieContainer extends React.Component{
    render(){
        return (
            <div className="movieContainer">
                <CategorySwitcher />
            </div>
            );
    }
} 

export default MovieContainer;