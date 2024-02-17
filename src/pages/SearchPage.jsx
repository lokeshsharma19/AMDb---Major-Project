import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import NoSearching from "../components/NoSearching";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import SearchForm from "../components/SearchForm";
import { useFilter } from "../context/FilterProvider";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const [data, setData] = useState({
    movieData: null,
    isError: false,
    error: "",
  });
  // const [resultPage, setResultPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const { searchType, resultPage, setResultPage } = useFilter();
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const searchParam = url.get("search");

  const handleFetching = async (isNewSearch) => {
    setIsLoading(true);
    isNewSearch && setResultPage(1);
    const endpoint = `https://api.themoviedb.org/3/search/${searchType}?query=${searchParam}&api_key=${apiKey}&page=${resultPage}`;
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
          return [...prev, ...results];
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
    handleFetching(true);
  }, [searchParam, searchType]);

  useEffect(() => {
    if (resultPage > 1) {
      handleFetching(false);
    } else {
      handleFetching(true);
    }
  }, [resultPage]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setResultPage((prev) => prev + 1);
      }
    } catch (error) {
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
  return (
    <div>
      <SearchForm />
      {searchParam.length !== 0 ? (
        <div className="container">
          <Filter />
          <MovieList resultData={resultData} />
        </div>
      ) : (
        <NoSearching />
      )}
      {isLoading && <Loading />}
    </div>
  );
}

export default SearchPage;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Filter from "../components/Filter";
// import NoSearching from "../components/NoSearching";
// import MovieList from "../components/MovieList";
// import { apiKey } from "../constants";
// import SearchForm from "../components/SearchForm";
// import { useFilter } from "../context/FilterProvider";
// import Loading from "../components/Loading";
// import { useNavigate, useLocation } from "react-router-dom";

// function SearchPage() {
//   const [data, setData] = useState({
//     movieData: null,
//     isError: false,
//     error: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [resultData, setResultData] = useState([]);
//   const { searchType, resultPage, setResultPage, searchTerm, mediaType } =
//     useFilter();
//   const location = useLocation();
//   const url = new URLSearchParams(location.search);
//   const newSearchParam = url.get("s");

//   //fetching function ;
//   const handleFetching = async (isNewSearch = true) => {
//     setIsLoading(true);
//     const endpoint = `https://api.themoviedb.org/3/search/${searchType}?query=${newSearchParam}&api_key=${apiKey}&page=${resultPage}`;
//     try {
//       const response = await axios.get(endpoint);
//       const results = response.data.results;
//       setData({
//         movieData: response.data,
//         isError: false,
//         error: "",
//       });
//       setResultData((prev) => {
//         if (isNewSearch) return [...results];
//         else {
//           return [...prev, ...results];
//         }
//       });
//       setIsLoading(false);
//     } catch (error) {
//       setData({
//         movieData: null,
//         isError: true,
//         error: error,
//       });
//       setResultData(null);
//       setIsLoading(false);
//     }
//   };

//   //useEffects...
//   useEffect(() => {
//     let timeoutId;
//     if (timeoutId) clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       handleFetching(true);
//     }, 1000);

//     return () => clearTimeout(timeoutId);
//   }, [newSearchParam]);

//   useEffect(() => {
//     handleFetching(true);
//   }, [searchType]);

//   useEffect(() => {
//     handleFetching(false);
//   }, [resultPage]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, []);

//   //infinite scroll function -:

//   const handleInfiniteScroll = async () => {
//     try {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setIsLoading(true);
//         setResultPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       setData({
//         movieData: null,
//         isError: true,
//         error: error,
//       });
//     }
//   };

//   return (
//     <div>
//       <SearchForm />
//       {searchTerm.length !== 0 ? (
// <div className="container">
//   <Filter />
//   <MovieList resultData={resultData} />
// </div>
//       ) : (
//         <NoSearching />
//       )}
//       {isLoading && <Loading />}
//     </div>
//   );
// }

// export default SearchPage;

// // const navigate = useNavigate();

// // const debounce = (func, delay) => {
// //   let timeoutId;
// //   return function (...args) {
// //     if (timeoutId) clearTimeout(timeoutId);
// //     timeoutId = setTimeout(() => {
// //       func.call(this, ...args);
// //     }, delay);
// //   };
// // };

// // const handleChange = (value) => {
// //   // setMediaType("all");
// //   // setResultPage(1);
// //   setSearchTerm(value);
// //   // navigate(`/search?s=${value}`);
// // };

// //
