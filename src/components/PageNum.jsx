import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useFilter } from "../context/FilterProvider";

function PageNum({ total_pages: totalPages }) {
  const { resultPage, setResultPage } = useFilter();
  const getMaxPageLimit = () => {
    return totalPages > 500 ? 500 : totalPages;
  };
  return (
    <div
      style={{
        backgroundColor: "var(--light-gray-color)",
        width: "fit-content",
        borderRadius: "0.2rem",
        margin: "1rem 0",
      }}>
      {totalPages && (
        <>
          <Stack spacing={2}>
            <Pagination
              style={{ borderRadius: "50%", padding: "0.2rem" }}
              count={getMaxPageLimit()}
              page={resultPage}
              onChange={(e, value) => {
                window.scrollTo(0, 0);
                setResultPage(value);
              }}
              color="primary"
            />
          </Stack>
        </>
      )}
    </div>
  );
}

export default PageNum;
