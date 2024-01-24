import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { useFilter } from "../context/FilterProvider";

function SearchPage() {
  const [data, setData] = useState({
    movieData: null,
    isError: false,
    error: "",
  });
  const { searchType, resultPage, setResultPage, searchTerm } = useFilter();
  useEffect(() => {
    setResultPage(1);
    (async () => {
      const endpoint = `https://api.themoviedb.org/3/search/${searchType}?query=${searchTerm}&api_key=${apiKey}&page=${resultPage}`;
      try {
        const response = await axios.get(endpoint);
        setData({
          movieData: response.data,
          isError: false,
          error: "",
        });
      } catch (error) {
        setData({
          movieData: null,
          isError: true,
          error: error,
        });
      }
    })();
  }, [searchTerm]);
  const searchedResults = data.movieData;
  return (
    <div>
      <SearchForm />
      <Filter />
      <MovieList {...searchedResults} />
    </div>
  );
}

export default SearchPage;
