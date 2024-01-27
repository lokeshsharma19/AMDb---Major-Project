import React, { useEffect, useState } from "react";
import { apiKey } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import styles from "./SingleMovieDetail.module.css";
import Actors from "../components/Actors";
import Trailer from "../components/Trailer";

export const loader = async ({ params }) => {
  const imdbId = params.id;
  const mediaType = params.mediaType;
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${imdbId}?api_key=${apiKey}&append_to_response=videos,credits`;
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
  const [isActive, setIsActive] = useState(true);
  if (movieDetail?.success && movieDetail.success == "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  let poster;
  const poster_path = movieDetail?.poster_path;
  const profile_path = movieDetail?.profile_path;
  if (poster_path || profile_path) {
    poster = `https://image.tmdb.org/t/p/original/${
      poster_path || profile_path
    }`;
  } else {
    poster =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images";
  }

  if (isError) return <h1>{error}</h1>;

  useEffect(() => {
    let timeoutId;
    const inActivity = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 5000);
    };
    const handleActivity = () => {
      setIsActive(true);
      inActivity();
    };
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    inActivity();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);
  return (
    <div className={styles.singleMovieContainer}>
      <div className={styles.trailerContainer}>
        {movieDetail?.videos?.results.length > 0 && (
          <Trailer
            setIsActive={setIsActive}
            trailerData={movieDetail.videos.results[0]}
          />
        )}
      </div>
      <div
        className={`container ${styles.movieDetail} ${
          isActive ? styles.showing : styles.notShowing
        }`}>
        <div className={styles.infoOnLeft}>
          <h2>{movieDetail.title}</h2>
          {movieDetail.adult && <p>Adult - 18+</p>}
          {!movieDetail.adult && <p>13+</p>}
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
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Runtime </span>
            <span className={styles.value}> {movieDetail.runtime}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Language </span>
            <span className={styles.value}>
              {movieDetail.original_language}
            </span>
          </p>
        </div>
        <div className={styles.infoOnright}>
          <div className="plot">
            <div className={styles.bigInfo}>
              <h3>Plot</h3>
              <p className={styles.plot}>{movieDetail.overview}</p>
            </div>
            <div className={`${styles.actorsContainer} ${styles.bigInfo}`}>
              <h3>Actors</h3>
              <Actors actors={movieDetail.credits.cast} />
            </div>
            <div className={styles.bigInfo}>
              <h3>Country</h3>
              <p>{movieDetail.production_countries[0]?.name}</p>
            </div>
            <h2>More Info</h2>
            <p className={styles.infoPara}>
              <span className={styles.key}>Movie Runtime </span>
              <span className={styles.value}>{movieDetail.runtime}</span>
            </p>
            <p className={styles.infoPara}>
              <span className={styles.key}>imdb Rating </span>
              <span className={styles.value}>{movieDetail.imdbRating}</span>
            </p>
            <p className={styles.infoPara}>
              <span className={styles.key}>imdb Votes </span>
              <span className={styles.value}>{movieDetail.vote_average}</span>
            </p>
            <p className={styles.infoPara}>
              <span className={styles.key}>Budget </span>
              <span className={styles.value}>${movieDetail.budget}</span>
            </p>
            <p className={styles.infoPara}>
              <span className={styles.key}>Revenue</span>
              <span className={styles.value}>${movieDetail.revenue}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
