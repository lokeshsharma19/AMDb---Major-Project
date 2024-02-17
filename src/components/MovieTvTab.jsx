import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./MovieTvTab.module.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { useFilter } from "../context/FilterProvider";

export default function ColorTabs() {
  const [value, setValue] = useState("movie");
  const { mediaType, setMediaType } = useFilter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMediaType(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#457b9d",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={mediaType === "all" ? "movie" : mediaType}
          onChange={handleChange}
          textColor="white"
          indicatorColor="primary"
          aria-label="secondary tabs example">
          <Tab className={styles.tab} value="movie" label="Movies" />
          <Tab className={styles.tab} value="tv" label="TV Shows" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
