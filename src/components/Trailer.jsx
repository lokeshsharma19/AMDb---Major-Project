import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./Trailer.module.css";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";

function Trailer({ backDrop, trailerData, setIsActive }) {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const trailerVideoKey = trailerData.key;
  // const opts = {
  //   height: "700",
  //   width: "1000",
  //   playerVars: {
  //     autoplay: isTrailerPlaying ? 1 : 0,
  //   },
  // };
  return (
    <div className={styles.trailer}>
      {/* {isTrailerPlaying ? (
        <YouTube
          videoId={trailerVideoKey}
          onPlay={() => {
            setIsActive(false);
          }}
          onEnd={() => {
            setIsTrailerPlaying(false);
          }}
          onError={() => {
            setIsActive(true);
          }}
          opts={opts}
        />
      ) : (
        <p>No Trailer Available</p>
      )} */}
      {!isTrailerPlaying && (
        <img
          src={`https://image.tmdb.org/t/p/original${backDrop}`}
          width={700}
          height={500}
          alt=""
        />
      )}
      {trailerVideoKey && isTrailerPlaying && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideoKey}?autoplay=1`}
          title="YouTube Video"
          onPlay={() => setIsTrailerPlaying(true)}
          onEnded={() => setIsTrailerPlaying(false)}
          frameBorder="0"
          allowFullScreen></iframe>
      )}
    </div>
  );
}

export default Trailer;
