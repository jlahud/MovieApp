import React, { useEffect, useState } from "react";

const Movie = ({ api, deleteMovie, movie }) => {
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
    <div className="col-12 card border-info mx-3 mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header d-flex justify-content-between">
          { movie.category }
        <i
            onClick={ () => { deleteMovie(movie.id) } }
            className="fas fa-times text-danger lead"
            style={{ cursor: "pointer" }}
        ></i>
      </div>
      <img
        src={ `${api}/img/${movie.image}` }
        className="mx-auto"
        style={{ width: "80%", height: "250px" }}
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
