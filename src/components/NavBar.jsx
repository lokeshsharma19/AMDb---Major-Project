import React, { useState } from "react";
import { useFilter } from "../context/FilterProvider";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function Heading() {
  const { setResultPage, setMediaType, mediaType } = useFilter();
  const [isMovies, setIsMovies] = useState(false);
  const [isCelebrites, setIsCelebrites] = useState(false);
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <h2
          onClick={() => {
            setIsCelebrites(false);
            setIsMovies(false);
            setResultPage(1);
            setMediaType("all");
          }}>
          AMDb
        </h2>
      </Link>
      <ul className={styles.navItems}>
        <Link to="/trending-titles">
          <li
            style={isMovies ? { color: "var(--base-color)" } : {}}
            onClick={() => {
              setIsCelebrites(false);
              setIsMovies(true);
              setResultPage(1);
              setMediaType("movie");
            }}>
            Movies/TV Shows
          </li>
        </Link>
        <Link to="/trending-celebrities">
          <li
            style={isCelebrites ? { color: "var(--base-color)" } : {}}
            onClick={() => {
              setIsCelebrites(true);
              setIsMovies(false);
              setResultPage(1);
              setMediaType("movie");
            }}>
            Celebrity
          </li>
        </Link>
        <li>Watch List</li>
      </ul>
    </div>
  );
}

export default Heading;
