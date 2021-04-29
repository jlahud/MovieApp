import React from 'react'
import Movie from './Movie'

const Movies = ({ api, deleteMovie, movies, openMovieModal }) => {
    return (
        <div className="row">
        {
            movies.map(movie => (
                <Movie key={movie.id} api={api} deleteMovie={deleteMovie} movie={movie} openMovieModal={openMovieModal} />
            ))
        }
        </div>
    )
}

export default Movies
