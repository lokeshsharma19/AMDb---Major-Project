import React from "react";
import styles from "./Actors.module.css";
import Actor from "./Actor";

function Actors({ actors }) {
  return (
    <>
      <div className={styles.actorContainer}>
        {actors.slice(0, 16).map((actor) => (
          <Actor key={actor.id} {...actor} />
        ))}
        <p className={styles.viewMore}>View More</p>
      </div>
    </>
  );
}

export default Actors;
