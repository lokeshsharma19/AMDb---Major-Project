import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./Trailer.module.css";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";

function Trailer({ trailerData, setIsActive }) {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(true);
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
      {trailerVideoKey && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideoKey}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen></iframe>
      )}
    </div>
  );
}

export default Trailer;
