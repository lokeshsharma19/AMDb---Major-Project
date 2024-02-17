import React, { useEffect } from "react";
import { apiKey } from "../constants";
import MovieList from "./MovieList";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useFilter } from "../context/FilterProvider";
import TrendingBtn from "../components/TrendingBtn";
import PageNum from "./PageNum";
import styles from "./Trending.module.css";

function Trending() {
  const [trendingData, setTrendingData] = useState(null);
  const { resultPage, setResultType, resultType, mediaType } = useFilter();
  useEffect(() => {
    setTrendingData(null);
    const trendingEndpoint = `https://api.themoviedb.org/3/trending/${mediaType}/${resultType}?api_key=${apiKey}&page=${resultPage}`;
    console.log(trendingEndpoint);
    (async () => {
      try {
        const response = await axios.get(trendingEndpoint);
        setTrendingData(response.data);
        window.scrollTo(0, 0);
      } catch (error) {}
    })();
  }, [resultType, resultPage, mediaType]);
  console.log(trendingData);
  return (
    <>
      <div className={`${styles.topSection}`}>
        <h2>Trending</h2>
        <TrendingBtn setResultType={setResultType} />
      </div>
      <div>
        {trendingData ? (
          <MovieList resultData={trendingData.results} />
        ) : (
          <Loading />
        )}
      </div>
      <PageNum total_pages={trendingData && trendingData.total_pages} />
    </>
  );
}

export default Trending;
