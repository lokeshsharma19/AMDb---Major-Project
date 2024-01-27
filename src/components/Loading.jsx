import React from "react";
import LoadingSpinner from "../assets/LoadingSpinner.svg";

function Loading() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
      <img src={LoadingSpinner} alt="Loading" className="loadingSpinner" />
    </div>
  );
}

export default Loading;
