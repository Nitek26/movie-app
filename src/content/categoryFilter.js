import React from 'react';

import './categoryFilter.css';

const CategoryFilter = (props) => {
    const options = [
        'all',
        'documentary',
        'comedy',
        'horror',
        'crime'
    ];

    const filterMovies = (option) => {
        if(!props.disabled){
            props.setCategoryFilter(option);
        }
    }

    return (
        <div className={"categoryFilter " + (props.disabled ? "disabled" : "")}>
            {options.map(option => {
                return <div key={option} onClick={() => filterMovies(option)} className={props.filter === option ? 'selected' : null}>{option}</div>
            })}
        </div>
    );
};

export default CategoryFilter;