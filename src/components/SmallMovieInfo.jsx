import React from "react";
import styles from "./SmallMovieInfo.module.css";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SmallMovieInfo({
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
  mediaType,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.infoOnTop}>
        <div className="smallPoster">
          <img className={styles.smallImg} src={poster} alt={title || name} />
        </div>
        <div className={styles.topInfo}>
          {adult && <p>U/A 18+</p>}
          {!adult && <p>U/A 13+</p>}
          <h2 className={styles.topInfoParts}>{title || name}</h2>
          <p className={styles.topInfoParts}>Category : {mediaType}</p>
          <p className={styles.topInfoParts}>
            Release date : {release_date || first_air_date}
          </p>
          <p className={styles.topInfoParts}>Language : {original_language}</p>
          <div className={styles.modalBtnsContainer}>
            <button
              onClick={() => {
                navigate(`/detail/${id}/${mediaType}`);
              }}
              className={styles.modalBtn1}>
              <FaCaretRight />
              View More
            </button>
            <button className={styles.modalBtn2}>
              <CiBookmarkPlus className={styles.watchlistBtn} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.infoOnBottom}>
        <p>About : </p>
        <p>{overview}</p>
      </div>
    </>
  );
}

export default SmallMovieInfo;
