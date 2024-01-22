import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  ErrorPage,
  SingleMovieDetail,
  RootLayout,
  SearchPage,
} from "./pages/index";
import { loader as searchingLoader } from "./pages/SearchPage";
import { useFilter } from "./context/FilterProvider";

function App() {
  const { searchType, resultPage, setResultPage } = useFilter();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/search/*"
          element={<SearchPage />}
          loader={(request) => {
            return searchingLoader({
              ...request,
              searchType,
              resultPage,
              setResultPage,
            });
          }}
        />
        <Route path="/detail/:id" element={<SingleMovieDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
