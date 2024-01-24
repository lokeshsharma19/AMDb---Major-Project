import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
import Loading from "../components/Loading";
import styles from "./RootLayout.module.css";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <nav className={` container ${styles.nav}`}>
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
