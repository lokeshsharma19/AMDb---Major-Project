import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterContext from "./context/FilterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilterContext>
    <App />
  </FilterContext>
);
