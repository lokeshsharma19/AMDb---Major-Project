import React from "react";
import styles from "./Actor.module.css";

function Actor({ profile_path: photo, character, name }) {
  const baseUrl = "https://image.tmdb.org/t/p/w185";
  return (
    <div className={styles.actor}>
      <img
        className={styles.photo}
        src={`https://image.tmdb.org/t/p/w185${photo}`}
        alt={name}
      />
      <p className={styles.name}>
        {name} as {character}
      </p>
    </div>
  );
}

export default Actor;
