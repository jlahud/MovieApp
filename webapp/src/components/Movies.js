import React from 'react'
import Movie from './Movie'

const Movies = ({ api, deleteMovie, movies }) => {
    return (
        <div className="row">
        {
            movies.map(movie => (
                <Movie key={movie.id} api={api} deleteMovie={deleteMovie} movie={movie} />
            ))
        }
        </div>
    )
}

export default Movies
