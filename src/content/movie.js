import React from 'react';

import './movie.css';

class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <img src={this.props.poster_path} alt={`${this.props.title} poster`}></img>
                <br/>
                <span className="title">{this.props.title}</span>
                <span className="release_date">{new Date(this.props.release_date).getFullYear()}</span>
                <br />
                <span className="genres">{this.props.genres.join(', ')}</span>
            </div>)
    }
}

export default Movie;