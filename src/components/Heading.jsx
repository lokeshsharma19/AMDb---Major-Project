import React from "react";
import { useFilter } from "../context/FilterProvider";

function Heading() {
  const { setResultPage } = useFilter();
  return (
    <div style={{ display: "inline-block" }}>
      <h2
        onClick={() => {
          setResultPage(1);
        }}>
        AMDb
      </h2>
    </div>
  );
}

export default Heading;
