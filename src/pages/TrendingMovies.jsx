import React from "react";
import Trending from "../components/Trending";
import SearchForm from "../components/SearchForm";
import MovieTvTab from "../components/MovieTvTab";

function TrendingMovie() {
  return (
    <>
      <SearchForm />
      <div className="container">
        <MovieTvTab />
        <Trending />
      </div>
    </>
  );
}

export default TrendingMovie;
