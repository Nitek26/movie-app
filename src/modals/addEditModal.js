import React from 'react';
import PropTypes from 'prop-types';

import './addEditModal.css'

const AddEditModal = (props) => {

    const genres = [
        "Adventure",
        "Science Fiction",
        "Action",
        "Comedy",
        "Family",
        "Animation",
        "Fantasy",
        "Drama",
        "Romance"
    ];

    let movie = props.movie;

    const reset = () => {
        console.log('reset cliked');
    };


    return (
        <div className={'addEditContainer' + (props.isVisible ? ' visible' : '')}>
            <div className="addEditModal">
                <button className="close" onClick={() => props.toggleModal()}>X</button>
                <div className="header">edit movie</div>
                <div className="body">
                    <label> movie id
                        <input type="text" name="id" defaultValue={movie.id} disabled="disabled" />
                    </label>
                    
                    <label> title
                        <input type="text" name="title" defaultValue={movie.title} />
                    </label>
                    
                    <label> release date
                        <input type="text" name="title" defaultValue={movie.release_date} />
                    </label>
                                        
                    <label> movie url
                        <input type="text" name="title" defaultValue={movie.poster_path} />
                    </label>
                                        
                    <label> genre
                        <select multiple="multiple" size="1" defaultValue={movie.genres}>
                            {genres.map((genre) => {
                                    return <option key={genre} value={genre}>{genre}</option>
                                }
                            )}
                        </select>
                    </label>
                                        
                    <label> overview
                        <input type="text" name="title" defaultValue={movie.overview} />
                    </label>
                                        
                    <label> runtime
                        <input type="text" name="title" defaultValue={movie.runtime} />
                    </label>
                </div>
                <div className="buttons">
                    <button className="reset" onClick={() => reset()}>reset</button>
                    <button className="confirm" onClick={() => props.toggleModal()}>save</button>
                </div>

            </div>
        </div>
    );
};

AddEditModal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
};

export default AddEditModal;