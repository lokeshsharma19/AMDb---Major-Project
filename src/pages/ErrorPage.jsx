import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const errorMsg = useRouteError();
  return (
    <div>
      <p style={{ color: "red" }}>{errorMsg.message}</p>
    </div>
  );
}

export default ErrorPage;
