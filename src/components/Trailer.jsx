import React, { useState } from "react";
import YouTube from "react-youtube";

function Trailer({ trailerData, setIsActive }) {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(true);
  const trailerVideoKey = trailerData.key;
  const opts = {
    height: "400",
    width: "560",
    playerVars: {
      disablekb: 1,
      controls: 0,
      showinfo: 0,
      autoplay: isTrailerPlaying ? 1 : 0,
    },
  };
  return (
    <div>
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
