import React, {useState} from 'react';

import AddEditModal from '../modals/addEditModal';

import './movieHeader.css';

const MovieHeader = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAddModal = () => {
        setIsVisible(false);
    };

    return (
        <div className="movieHeader">
            <img src="logo.png" alt="Application logo"></img>
            <div className="addMovieContainer"><button onClick={() => setIsVisible(true)}>+ Add movie</button></div>
            <div className="headerText">
                Find your movie
                </div>
            <form className="searchForm">
                <input className="searchInput" type="text" placeholder="What do you want to watch?"></input>
                <button className="searchButton">Search</button>
            </form>
            <AddEditModal isVisible={isVisible} movie={{}} toggleModal={toggleAddModal} />
        </div>
    );
};

export default MovieHeader;