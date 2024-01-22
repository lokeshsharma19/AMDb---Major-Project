import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useFilter } from "../context/FilterProvider";

function PageNum({ total_pages: totalPages }) {
  const { resultPage, setResultPage } = useFilter();
  console.log("hello", resultPage, setResultPage);
  return (
    <div>
      {totalPages && (
        <>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
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