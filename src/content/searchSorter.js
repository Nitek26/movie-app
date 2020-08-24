import React from 'react';

import './searchSorter.css';

const SearchSorter = () => {
    return (
        <div className="searchSorter">
            <div>Sort by</div>
            <select>
                <option value="relase_date">Release Date</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
};

export default SearchSorter;