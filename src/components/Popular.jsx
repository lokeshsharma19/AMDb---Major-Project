// import React, { useEffect } from "react";
// import { apiKey } from "../constants";
// import MovieList from "./MovieList";
// import { useState } from "react";
// import axios from "axios";
// import Loading from "./Loading";
// import { useFilter } from "../context/FilterProvider";
// import PopularBtn from "../components/PopularBtn";

// function Popular() {
//   const [trendingType, setTrendingType] = useState("day");
//   const [trendingData, setTrendingData] = useState(null);
//   const { resultPage } = useFilter();
//   useEffect(() => {
//     const trendingEndpoint = `https://api.themoviedb.org/3/trending/all/${trendingType}?api_key=${apiKey}&page=${resultPage}`;
//     (async () => {
//       try {
//         const response = await axios.get(trendingEndpoint);
//         setTrendingData(response.data);
//         window.scrollTo(0, 0);
//       } catch (error) {}
//     })();
//   }, [trendingType, resultPage]);
//   console.log(trendingData);
//   return (
//     <>
//       <PopularBtn setTrendingType={setTrendingType} />
//       {trendingData ? <MovieList {...trendingData} /> : <Loading />}
//     </>
//   );
// }

// export default Pop;
