import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import TrendingBtn from "../components/TrendingBtn";
import Loading from "./Loading";
import { useFilter } from "../context/FilterProvider";
import { apiKey } from "../constants";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

function NoSearching() {
  const [noSearchingData, setNoSearchingData] = useState({
    movieData: null,
    isError: false,
    errorMsg: "",
  });
  const { resultPage } = useFilter();
  useEffect(() => {
    setNoSearchingData(null);
    const noSearchingEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${resultPage}`;
    (async () => {
      try {
        const response = await axios.get(noSearchingEndpoint);
        setNoSearchingData({
          movieData: response.data,
          isError: false,
          errorMsg: "",
        });
      } catch (error) {
        console.log(error);
        setNoSearchingData({
          movieData: null,
          isError: true,
          errorMsg: error?.response?.data,
        });
      }
    })();
  }, []);
  if (noSearchingData?.isError) {
    const errorData = noSearchingData?.errorMsg;
    console.log(noSearchingData.errorMsg);
    return (
      <>
        <ErrorPage {...errorData} />
      </>
    );
  }
  return (
    <>
      <h2 className="container">Popular Searches</h2>
      {noSearchingData ? (
        <MovieList resultData={noSearchingData.movieData?.results} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default NoSearching;
