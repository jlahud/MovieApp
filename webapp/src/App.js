import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import AddCategory from "./components/AddCategory";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";
import EditCategory from './components/EditCategory'
import EditMovie from './components/EditMovie'
import axios from "axios";

const App = () => {
  // Global State
  const [api, setApi] = useState(
    `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`
  );

  // States
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [categoryEdit, setCategoryEdit] = useState("")
  const [movieEdit, setMovieEdit] = useState("")
  // Onload Data
  useEffect(() => {
    getCategories();
    getMovies();
  }, []);

  // Async Crud Calls
  // Categories
  const getCategories = async () => {
    try {
      const response = await axios.get(`${api}/categories`);
      setCategories(response.data);
    } catch (err) { console.error(err) }
  };
  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${api}/categories/${id}`);
      let category_name = categories.filter((category) => category.id === id)[0].name
      setCategories(categories.filter((category) => category.id !== id));
      setMovies(movies.filter(movie => movie.category !== category_name))

    } catch (err) { console.error(err) }
  };
  const deleteCategories = async () => {
    try {
      await axios.delete(`${api}/categories`);
      setCategories([]);
      setMovies([])
    } catch (err) { console.error(err) }
  };
  const addCategory = async (categoryName) => {
    try {
      const response = await axios.post(`${api}/categories`, {
        name: categoryName,
      });
      setCategories([...categories, response.data]);
    } catch (err) { console.error(err) }
  };
  const editCategory = async (id, name) => {
    try {
      const response = await axios.put(`${api}/categories/${id}`, {
        'name': name
      })
      let tmp_categories = categories.filter(category => { category.id !== id })
      setCategories([...tmp_categories, response.data])
    } catch (err) { console.error(err) }
  }
  // Movies
  const getMovies = async () => {
    try {
      const response = await axios.get(`${api}/movies`);
      setMovies(response.data)
    } catch (err) { console.error(err) }
  };
  const deleteMovie = async (id) => {
    try {
      await axios.delete(`${api}/movies/${id}`);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (err) { console.error(err) }
  }
  const deleteMovies = async () => {
    try {
      await axios.delete(`${api}/movies`);
      setMovies([]);
    } catch (err) { console.error(err) }
  };
  const addMovie = async (title, rating, image, category) => {
    try {
      const response = await axios.post(`${api}/movies`, {
        'title': title,
        'rating': rating,
        'image': image,
        'category': category
      })
      setMovies([...movies, response.data])
    } catch (err) { console.error(err) }
  }
  const editMovie = async (id, title, rating, image, category) => {
    try {
      const response = await axios.put(`${api}/movies/${id}`, {
        'title': title,
        'rating': rating,
        'image': image,
        'category': category
      })
      let tmp_movies = movies.filter(movie => { movie.id !== id })
      setMovies([...tmp_movies, response.data])
    } catch (err) { console.error(err) }
  }

  // UI Code
  const openCategoryModal = () => {
    let modal = $("#categoryModal");
    modal.toggleClass("fade");
    modal.modal("toggle");
  };
  const openMovieModal = () => {
    let modal = $("#movieModal");
    modal.toggleClass("fade");
    modal.modal("toggle");
  };
  const openCategoryEditModal = (category) => {
    setCategoryEdit(category)
    let modal = $("#categoryEditModal");
    modal.toggleClass("fade");
    modal.modal("toggle");
  };
  const openMovieEditModal = (movie) => {
    setMovieEdit(movie)
    let modal = $("#movieEditModal");
    modal.toggleClass("fade");
    modal.modal("toggle");
  };

  return (
    <div>
      <AddCategory addCategory={addCategory} />
      <AddMovie api={api} addMovie={addMovie} categories={categories} />
      <EditCategory category={categoryEdit} editCategory={editCategory} />
      <EditMovie movie={movieEdit} api={api} editMovie={editMovie} categories={categories} />

      <Navbar />
      <div className="row mt-5 ml-4">
        <div className="col-12 col-lg-3 col-xl-2 pl-0 border-right">
          <div className="container">
            <h4 className="mb-4">Categories</h4>
            <Categories
              openCategoryModal={openCategoryEditModal}
              deleteCategory={deleteCategory}
              categories={categories}
            />
            <button
              onClick={openCategoryModal}
              className="btn btn-info my-2 w-100"
            >
              Add Category
            </button>
            {categories.length > 0 && (
              <button
                onClick={deleteCategories}
                className="btn btn-danger my-2 w-100"
              >
                Clear Categories
              </button>
            )}
            <button
              onClick={openMovieModal}
              className="btn btn-info my-2 w-100"
            >
              Add Movie
            </button>
            {movies.length > 0 && (
              <button
                onClick={deleteMovies}
                className="btn btn-danger my-2 w-100"
              >
                Clear Movies
              </button>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="container">
            <h4 className="mb-4">Movies</h4>
            <Movies api={api} deleteMovie={deleteMovie} movies={movies} openMovieModal={openMovieEditModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
