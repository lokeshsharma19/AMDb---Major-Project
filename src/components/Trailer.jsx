import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "./Trailer.module.css";

function Trailer({ trailerData, setIsActive }) {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(true);
  const trailerVideoKey = trailerData.key;
  const opts = {
    height: "1000",
    width: "1400",
    playerVars: {
      disablekb: 1,
      controls: 0,
      showinfo: 0,
      autoplay: isTrailerPlaying ? 1 : 0,
    },
  };
  return (
    <div className={styles.trailer}>
      {isTrailerPlaying ? (
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
      )}
    </div>
  );
}

export default Trailer;
