import { useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/addMovie/AddMovie";
import Filter from "./components/filter/Filter";
import MovieList from "./components/movieList/MovieList";
import { movies } from "./data";

function App() {
  // eslint-disable-next-line
  const [moviesList, setMoviesList] = useState(movies);
  const [titleSearch, setTitleSearch] = useState("");
  const [ratingSearche, setRatingSearche] = useState(0);

  const addNewMovie = (newMovie) => {
    movies.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
    console.log(newMovie);
  };

  const filterMovies = () => {
    setMoviesList(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(titleSearch.trim()) &&
          movie.average >= ratingSearche
      )
    );
  };
  useEffect(() => {
    filterMovies();
    // eslint-disable-next-line
  }, [titleSearch, ratingSearche]);

  return (
    <>
      <AddMovie addNewMovie={addNewMovie} />
      <Filter
        setTitleSearch={setTitleSearch}
        ratingSearche={ratingSearche}
        setRatingSearche={setRatingSearche}
      />
      <MovieList moviesList={moviesList} />
    </>
  );
}

export default App;
