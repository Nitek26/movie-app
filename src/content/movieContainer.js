import React from 'react';

import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import './movieContainer.css';

class MovieContainer extends React.Component {
    state = {
        movies: [
            {
                "id": 337167,
                "title": "Fifty Shades Freed",
                "tagline": "Don't miss the climax",
                "vote_average": 6.1,
                "vote_count": 1195,
                "release_date": "2018-02-07",
                "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
                "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
                "budget": 55000000,
                "revenue": 136906000,
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "runtime": 106
            },
            {
                "id": 269149,
                "title": "Zootopia",
                "tagline": "Welcome to the urban jungle.",
                "vote_average": 7.7,
                "vote_count": 6795,
                "release_date": "2016-02-11",
                "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
                "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
                "budget": 150000000,
                "revenue": 1023784195,
                "genres": [
                    "Animation",
                    "Adventure",
                    "Family",
                    "Comedy",
                    "Crime"
                ],
                "runtime": 108
            },
            {
                "id": 181808,
                "title": "Star Wars: The Last Jedi",
                "tagline": "The Saga Continues",
                "vote_average": 7.1,
                "vote_count": 4732,
                "release_date": "2017-12-13",
                "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
                "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
                "budget": 200000000,
                "revenue": 1325937250,
                "genres": [
                    "Fantasy",
                    "Adventure",
                    "Science Fiction"
                ],
                "runtime": 152
            },
            {
                "id": 284054,
                "title": "Black Panther",
                "tagline": "Long live the king",
                "vote_average": 7.3,
                "vote_count": 3788,
                "release_date": "2018-02-13",
                "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
                "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
                "budget": 200000000,
                "revenue": 1245257672,
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Science Fiction"
                ],
                "runtime": 134
            },
            {
                "id": 354912,
                "title": "Coco",
                "tagline": "The celebration of a lifetime",
                "vote_average": 7.8,
                "vote_count": 3619,
                "release_date": "2017-10-27",
                "poster_path": "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
                "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
                "budget": 175000000,
                "revenue": 700920729,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Family",
                    "Animation"
                ],
                "runtime": 105
            },
            {
                "id": 333339,
                "title": "Ready Player One",
                "tagline": "A better reality awaits.",
                "vote_average": 8.1,
                "vote_count": 617,
                "release_date": "2018-03-28",
                "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
                "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
                "budget": 175000000,
                "revenue": 0,
                "genres": [
                    "Adventure",
                    "Science Fiction",
                    "Action"
                ],
                "runtime": 140
            }
        ],
        modalOpened: [],
        confirmModalShown: false,
        confirmModalId: null,
        editModalShown: false,
        categoryFilter: 'all'
    };

    toggleDropdownModal = (id) => {
        let currentState = this.state.modalOpened;
        const newState = currentState.includes(id) ? currentState.filter(i => i !== id) : [...currentState, id]

        this.setState({ modalOpened: newState });
    };

    toggleConfirmDeleteModal = (id) => {
        this.setState({
            confirmModalShown: !this.state.confirmModalShown,
            confirmModalId: id
        });
    };

    toggleEditModal = (movie) => {
        this.setState({
            editModalShown: !this.state.editModalShown,
            movieToEdit: movie
        });
    };

    setCategoryFilter = (filter) => {
        this.setState({
            categoryFilter: filter
        })
    }

    render() {

        let moviesToShow = this.state.movies.filter(movie => {
            if(this.state.categoryFilter === 'all'){
                return true;
            } else {
                return movie.genres.map(genre => genre.toLowerCase()).includes(this.state.categoryFilter);
            }
        });

        let modal = ''
        if(this.state.movieToEdit){
            modal = <AddEditModal isVisible={this.state.editModalShown} movie={this.state.movieToEdit} toggleModal={this.toggleEditModal} />
        }

        return (
            <>
                <div className="movieContainer">
                    <div className="filters">
                        <CategoryFilter filter={this.state.categoryFilter} setCategoryFilter={this.setCategoryFilter} />
                        <SearchSorter />
                    </div>
                    <div className="searchCount">
                        <span>{moviesToShow.length}</span> movies found
                </div>
                    <div className="searchResults">
                        {moviesToShow.map(movie => {
                            return (
                                <Movie
                                    key={movie.id}
                                    movie={movie}
                                    toggleDropdownModal={this.toggleDropdownModal}
                                    modalOpened={this.state.modalOpened.includes(movie.id)} 
                                    toggleConfirmDeleteModal={this.toggleConfirmDeleteModal}
                                    toggleEditModal={this.toggleEditModal} />
                            );
                        })}
                    </div>
                </div>
                <DeleteConfirmation isVisible={this.state.confirmModalShown} toggleConfirmDeleteModal={this.toggleConfirmDeleteModal} />
                {modal}
            </>
        );
    }
}

export default MovieContainer;