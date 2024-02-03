import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
import Nothing from "./Nothing";

function MovieList({ resultData: results }) {
  console.log(results);
  if (!results || results.length === 0) return <Nothing />;
  return (
    <>
      <div className={`${styles.moviesList}`}>
        {results &&
          results.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
      </div>
    </>
  );
}

export default MovieList;
