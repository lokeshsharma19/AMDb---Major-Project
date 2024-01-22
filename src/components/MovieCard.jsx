import React from "react";

function MovieCard({
  id,
  title,
  name,
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
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "2px solid black",
      }}>
      <p>{id}</p>
      <img src={poster} alt="" height="200px" />
      <h2>{title ? title : name}</h2>
      <p>{original_language}</p>
      <p>{overview}</p>
    </div>
  );
}

export default MovieCard;
