import axios from "axios";
import React from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export async function loader({
  request,
  searchType,
  resultPage,
  setResultPage,
}) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const endpoint = `https://api.themoviedb.org/3/search/${searchType}?query=${searchTerm}&api_key=${apiKey}&page=${resultPage}`;
  try {
    const response = await axios.get(endpoint);
    return {
      movieData: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    return {
      movieData: null,
      isError: true,
      error: error,
    };
  }
}

function SearchPage({ setResultPage, setSearchType }) {
  const data = useLoaderData();
  const searchedResults = data.movieData;
  console.log(searchedResults);
  return (
    <div>
      <SearchForm />
      <Filter />
      <MovieList {...searchedResults} />
    </div>
  );
}

export default SearchPage;
