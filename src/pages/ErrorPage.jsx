import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage({ success, status_message }) {
  const errorMsg =
    status_message?.length > 0 ? status_message : useRouteError();
  return (
    <div>
      <h2 style={{ color: "red", textAlign: "center" }}>{errorMsg}</h2>
    </div>
  );
}

export default ErrorPage;
