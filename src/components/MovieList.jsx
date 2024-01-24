import React from "react";
import MovieCard from "./MovieCard";
import PageNum from "./PageNum";
import styles from "./MovieList.module.css";
import Nothing from "./Nothing";

function MovieList({ page, results, total_pages }) {
  console.log(results);
  if (!results || results.length === 0) return <Nothing />;
  return (
    <>
      <div className={`container ${styles.moviesList}`}>
        {results &&
          results.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
      </div>
      <PageNum total_pages={total_pages} />
    </>
  );
}

export default MovieList;
