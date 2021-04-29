import axios from "axios";
import React, { useState } from "react";

const AddMovie = ({ api, categories, addMovie }) => {
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("1");
  const [movieCategory, setMovieCategory] = useState("")
  const [movieImage, setMovieImage] = useState("default.png")
  const handleMovieChange = (e) => {
    setMovieName(e.target.value);
  };
  const handleRatingChange = (e) => {
    setMovieRating(e.target.value)
  }
  const handleCategoryChange = (e) => {
    setMovieCategory(e.target.value)
  }
  const handleImageChange = async (e) => {
      let file = e.target.files[0]
      let data = new FormData()
      data.append("file", file)
      try {
      const response = await axios.post(`${api}/upload`, data, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      let filename = response.data.filename
      document.getElementById('movieImage').src = `${api}/img/${filename}`
      setMovieImage(filename)
      } catch(err) {
          console.log(err)
      }
  }
  const handleSubmit = () => {
    setMovieName('')
    setMovieRating('1')
    setMovieCategory('')
    setMovieImage('default.png')
  }
  return (
    <div id="movieModal" className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Category</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
                <input onChange={ handleImageChange } type="file" className="d-none" id="file"/>
                <label htmlFor="file">
                <img id="movieImage" src={`${api}/img/default.png`}
                style={{ width: "30%", height: "120px", cursor: "pointer" }}
                className="rounded mx-auto d-block border rounded-circle" />
                </label>
            </div>
            <div className="form-group">
              <label className="col-form-label">Movie Name</label>
              <input
                value={movieName}
                onChange={(e) => {
                  handleMovieChange(e);
                }}
                type="text"
                className="form-control"
                placeholder="Enter movie name"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Rating</label>
              <input
                value={movieRating}
                onChange={(e) => {
                  handleRatingChange(e);
                }}
                step="0.1"
                min="1"
                max="5"
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">Category</label>
              <select value={ movieCategory } onChange={ (e) => { handleCategoryChange(e) } } className="custom-select">
                <option hidden value="">
                  Category
                </option>
                {categories.map((category) => (
                  <option key={ category.id } value={ category.name }>{ category.name }</option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                addMovie(movieName, movieRating, movieImage, movieCategory);
                handleSubmit();
              }}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
