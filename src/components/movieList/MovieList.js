import React from "react";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ moviesList }) => {
  return (
    <>
      {moviesList.map((element, i) => (
        <MovieCard key={i} movie={element} />
      ))}
    </>
  );
};

export default MovieList;
