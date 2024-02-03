import React from "react";
import Trending from "../components/Trending";
import SearchForm from "../components/SearchForm";

function TrendingCelebrities() {
  return (
    <>
      <SearchForm />
      <div className="container">
        <Trending />
      </div>
    </>
  );
}

export default TrendingCelebrities;
