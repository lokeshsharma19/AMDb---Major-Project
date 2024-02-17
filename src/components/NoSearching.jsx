import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { apiKey } from "../constants";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

function NoSearching() {
  const [noSearchingData, setNoSearchingData] = useState({
    movieData: null,
    isError: false,
    errorMsg: "",
  });
  useEffect(() => {
    setNoSearchingData(null);
    const noSearchingEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;
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
    <div className="container">
      <h2 style={{ marginBottom: "1.5rem" }}>Popular Searches</h2>
      {noSearchingData ? (
        <MovieList resultData={noSearchingData.movieData?.results} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default NoSearching;
