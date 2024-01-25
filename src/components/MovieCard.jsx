import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({
  id,
  title,
  name,
  release_date,
  original_language,
  overview,
  poster_path,
  profile_path,
}) {
  let poster;
  if (poster_path || profile_path) {
    poster = `https://image.tmdb.org/t/p/original/${
      poster_path || profile_path
    }`;
  } else {
    poster =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images";
  }
  return (
    <Link className={styles.movieCard} to={`/detail/${id}`}>
      <p>{title}</p>
      <img src={poster} alt="" height="200px" className={styles.moviePoster} />
      <h2 className={styles.movieTitle}>{title ? title : name}</h2>
      <h4 className={styles.movieLang}>{original_language}</h4>
      <h4 className={styles.movieYear}>{release_date}</h4>
    </Link>
  );
}

export default MovieCard;
