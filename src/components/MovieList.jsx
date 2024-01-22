import React from "react";
import MovieCard from "./MovieCard";
import PageNum from "./PageNum";

function MovieList({ page, results, total_pages }) {
  return (
    <div>
      {results.map((movie) => {
        
        return <MovieCard key={movie.id} {...movie} />;
      })}
      <PageNum total_pages={total_pages} />
    </div>
  );''
}

export default MovieList;
