import React from "react";
import { useFilter } from "../context/FilterProvider";
import styles from "./Filter.module.css";

function Filter() {
  const { setSearchType, searchType, setMediaType } = useFilter();
  return (
    <div>
      <select
        className={styles.filter}
        name="searchTermType"
        id="searchTermType"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
          if (e.target.value !== "multi") {
            console.log("chal gaya");
            setMediaType(e.target.value);
          }
        }}>
        <option value="multi">All</option>
        <option value="movie">Movie</option>
        <option value="tv">Tv Show</option>
        <option value="person">Person</option>
      </select>
    </div>
  );
}

export default Filter;
