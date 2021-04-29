import React, { useEffect, useState } from "react";

const Movie = ({ api, deleteMovie, movie, openMovieModal }) => {
  const [stars, setStars] = useState([])
  useEffect(() => {
    let number_stars = Math.floor(movie.rating)
    let tmp_stars = []
    for (let i = 0 ; i < 5 ; i++) {
      if (i < number_stars) {
        tmp_stars.push(<span key={i} className="fa fa-star checked"></span>)
      } else {
        tmp_stars.push(<span key={i} className="fa fa-star"></span>)
      }
    }
    setStars(tmp_stars)
  }, [])
  return (
    <div className="col-12 card shadow mx-3 mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header bg-white d-flex justify-content-between">
          { movie.category }
          <div>

        <i
            onClick={ () => { openMovieModal(movie) } }
            className="fas fa-edit text-info lead mr-3"
            style={{ cursor: "pointer" }}
        ></i>
        <i
            onClick={ () => { deleteMovie(movie.id) } }
            className="fas fa-times text-danger lead"
            style={{ cursor: "pointer" }}
        ></i>
          </div>
      </div>
      <img
        src={ `${api}/img/${movie.image}` }
        className="mx-auto"
        style={{ width: "80%" }}
        alt={ movie.title }
      />
      <div className="card-body">
        <h4 className="card-title">{ movie.title }</h4>
        <p className="card-text">
          {
            stars.map(star => (
              star
            ))
          }
            <span className="ml-3"> { movie.rating } </span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
