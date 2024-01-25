import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { useFilter } from "../context/FilterProvider";
import Loading from "../components/Loading";

function SearchPage() {
  const [data, setData] = useState({
    movieData: null,
    isError: false,
    error: "",
  });
  const [searchingPage, setSearchingPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const { searchType, searchTerm } = useFilter();

  const handleFetching = async (isNewSearch) => {
    setIsLoading(true);
    const endpoint = `https://api.themoviedb.org/3/search/${searchType}?query=${searchTerm}&api_key=${apiKey}&page=${searchingPage}`;
    try {
      const response = await axios.get(endpoint);
      const results = response.data.results;
      setData({
        movieData: response.data,
        isError: false,
        error: "",
      });
      setResultData((prev) => {
        if (isNewSearch) return [...results];
        else {
          if (prev) return [...prev, ...results];
          else return [...results];
        }
      });
      setIsLoading(false);
    } catch (error) {
      setData({
        movieData: null,
        isError: true,
        error: error,
      });
      setResultData(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(" search changing");
    handleFetching(true);
  }, [searchTerm]);

  useEffect(() => {
    console.log("changing");
    handleFetching(false);
  }, [searchingPage]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setSearchingPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
      setData({
        movieData: null,
        isError: true,
        error: error,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // const searchedResult = data.movieData;
  return (
    <div>
      <SearchForm />
      <Filter />
      {resultData && <MovieList resultData={resultData} />}
      {isLoading && <Loading />}
    </div>
  );
}

export default SearchPage;
