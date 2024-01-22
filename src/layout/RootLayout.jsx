import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
import Loading from "../components/Loading";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <nav>
        <Link to="/">
          <h2>Movie Search</h2>
        </Link>
      </nav>
      <main>
        {navigation.state === "loading" ? (
          <>
            <img
              src={LoadingSpinner}
              alt="Loading"
              className="loadingSpinner"
            />
            <Loading />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default RootLayout;
