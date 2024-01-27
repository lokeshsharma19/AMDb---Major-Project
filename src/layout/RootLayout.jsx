import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./RootLayout.module.css";
import Heading from "../components/Heading";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <nav className={` container ${styles.nav}`}>
        <Link to="/">
          <Heading />
        </Link>
      </nav>
      <main>
        {navigation.state === "loading" ? (
          <>
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
