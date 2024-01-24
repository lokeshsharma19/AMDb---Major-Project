import React from "react";
import { apiKey } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetail.module.css";

export const loader = async ({ params }) => {
  const imdbId = params.id;
  const endpoint = `https://api.themoviedb.org/3/movie/${imdbId}?api_key=${apiKey}&append_to_response=videos`;
  try {
    const response = await axios.get(endpoint);
    return { movie: response.data, isError: false, error: "" };
  } catch (error) {
    const errorMsg =
      error?.response?.data?.Error || error.message || "Something went wrong";
    return { movie: null, isError: true, error: errorMsg };
  }
};

function SingleMovieDetail() {
  const { movie: movieDetail, isError, error } = useLoaderData();
  if (movieDetail.success && movieDetail.success == "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  console.log(movieDetail);
  let poster;
  const poster_path = movieDetail.poster_path;
  if (poster_path || profile_path) {
    poster = `https://image.tmdb.org/t/p/original/${
      poster_path || profile_path
    }`;
  } else {
    poster =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images";
  }

  if (isError) return <h1>{error}</h1>;
  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movieDetail.title}</h2>
        <img
          className={styles.moviePoster}
          src={poster}
          alt={movieDetail.title}
        />

        <p className={styles.infoPara}>
          <span className={styles.key}>Release Date </span>
          <span className={styles.value}>{movieDetail.release_date}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}> Genre </span>
          <span className={styles.value}>
            {movieDetail.genres.map((genre) => {
              console.log(genre);
              return <>{genre}</>;
            })}
          </span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime </span>
          <span className={styles.value}> {movieDetail.Runtime}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language </span>
          <span className={styles.value}>{movieDetail.Language}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Awards </span>
          <span className={styles.value}> {movieDetail.Awards}</span>
        </p>
      </div>
      <div className={styles.infoOnright}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Plot</h3>
            <p>{movieDetail.Plot}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Actors</h3>
            <p>{movieDetail.Actors}</p>
          </div>
          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movieDetail.Country}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Director </span>
            <span className={styles.value}>{movieDetail.Director}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Rating </span>
            <span className={styles.value}>{movieDetail.imdbRating}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>imdb Votes </span>
            <span className={styles.value}>{movieDetail.imdbVotes}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Boxoffice </span>
            <span className={styles.value}>{movieDetail.BoxOffice}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Metascore</span>
            <span className={styles.value}>{movieDetail.Metascore}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rated</span>
            <span className={styles.value}>{movieDetail.Rated}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
