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
    <div className="container">
      {totalPages && (
        <>
          <Stack spacing={2}>
            <Pagination
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
