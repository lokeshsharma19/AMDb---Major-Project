import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import {
  Home,
  ErrorPage,
  SingleMovieDetail,
  RootLayout,
  SearchPage,
} from "./pages/index";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";
import { useFilter } from "./context/FilterProvider";
import TrendingMovies from "./pages/TrendingMovies";
import TrendingCelebrities from "./pages/TrendingCelebrities";

function App() {
  const { searchType, resultPage, setResultPage, searchTerm, setSearchTerm } =
    useFilter();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/trending-titles" element={<TrendingMovies />} />
        <Route path="/trending-celebrities" element={<TrendingCelebrities />} />
        <Route index element={<Home />} />
        <Route path="/search/*" element={<SearchPage />} />
        {/* can use search param instead of * */}
        <Route
          path="/detail/:id/:mediaType"
          loader={SingleMovieLoader}
          element={<SingleMovieDetail />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
