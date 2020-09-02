import React from 'react';

import './searchSorter.css';

const SearchSorter = (props) => {
    const options = [
        { value: 'release_date', title: 'Release Date' },
        { value: 'title', title: 'Title' },
    ];

    return (
        <div className="searchSorter">
            <div>Sort by</div>
            <select onChange={(event) => props.setSortBy(event.target.value)} value={props.sortBy}>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.title}</option>
                })}
            </select>
        </div>
    );
};

export default SearchSorter;