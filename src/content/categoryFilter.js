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

    return (
        <div className="categoryFilter">
            {options.map(option => {
                return <div key={option} onClick={() => props.setCategoryFilter(option)} className={props.filter === option ? 'selected' : null}>{option}</div>
            })}
        </div>
    );
};

export default CategoryFilter;