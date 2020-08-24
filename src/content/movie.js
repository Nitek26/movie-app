import React from 'react';

import './movie.css';

class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <img src={this.props.poster_path} alt={`${this.props.title} poster`}></img>
                <span>{this.props.title}</span>
                <span>{this.props.release_date}</span>
                <span>{this.props.genres}</span>

            </div>)
    }
}

export default Movie;