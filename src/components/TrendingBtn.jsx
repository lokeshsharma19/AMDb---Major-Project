import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./TrendingBtn.module.css";

export default function ToggleButtons({ setResultType }) {
  const [alignment, setAlignment] = React.useState("day");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setResultType(event.target.value);
  };

  return (
    <div className="container">
      <ToggleButtonGroup
        className={styles.trendingBtn}
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment">
        <ToggleButton value="day" aria-label="left aligned">
          Today
        </ToggleButton>
        <ToggleButton value="week" aria-label="centered">
          This Week
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
