import React from "react";
import { useFilter } from "../context/FilterProvider";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function Heading() {
  const { setResultPage, setMediaType, mediaType } = useFilter();
  console.log(mediaType);
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <h2
          onClick={() => {
            setResultPage(1);
          }}>
          AMDb
        </h2>
      </Link>
      <ul className={styles.navItems}>
        <Link to="/trending-titles">
          <li onClick={() => setMediaType("movie")}>Movies/TV Shows</li>
        </Link>
        <Link to="/trending-celebrities">
          <li onClick={() => setMediaType("person")}>Celebrity</li>
        </Link>
        <li>Watch List</li>
      </ul>
    </div>
  );
}

export default Heading;
