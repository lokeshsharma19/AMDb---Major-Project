import React, { useEffect, useState } from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { useFilter } from "../context/FilterProvider";
import InfoModal from "./UI/InfoModal";
import SmallMovieInfo from "./SmallMovieInfo";
import { IoIosInformationCircleOutline } from "react-icons/io";

function MovieCard({
  media_type,
  id,
  title,
  name,
  release_date,
  original_language,
  overview,
  known_for,
  poster_path,
  profile_path,
  first_air_date,
  adult,
}) {
  const { setMediaType, mediaType } = useFilter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) document.documentElement.style.overflowY = "hidden";
    else document.documentElement.style.overflowY = "scroll";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [isModalOpen]);

  let poster;
  if (poster_path || profile_path) {
    poster = `https://image.tmdb.org/t/p/original/${
      poster_path || profile_path
    }`;
  } else {
    poster =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images";
  }

  //
  const movieDetails = {
    media_type,
    id,
    title,
    name,
    release_date,
    original_language,
    overview,
    known_for,
    poster,
    profile_path,
    first_air_date,
    adult,
  };

  //
  //

  console.log(mediaType);
  return (
    <>
      <Link
        className={styles.movieCard}
        onClick={() => {
          if (media_type) {
            setMediaType(media_type);
          }
        }}
        to={`/detail/${id}/${media_type || mediaType}`}>
        <div className={styles.movieCardTop}>
          <p>{title ? title : name}</p>
          <button
            className={styles.infoBtn}
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}>
            <IoIosInformationCircleOutline className={styles.infoIcon} />
          </button>
        </div>
        <img
          src={poster}
          alt=""
          height="200px"
          className={styles.moviePoster}
        />
        <h2 className={styles.movieTitle}>{title ? title : name}</h2>
        <h4 className={styles.movieLang}>{original_language}</h4>
        <h4 className={styles.movieYear}>{release_date}</h4>
      </Link>
      {isModalOpen && (
        <InfoModal handleCloseModal={handleCloseModal}>
          <SmallMovieInfo {...movieDetails} mediaType={mediaType} />
        </InfoModal>
      )}
    </>
  );
}

export default MovieCard;
