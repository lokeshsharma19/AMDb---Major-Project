import React, { createContext, useContext } from "react";
import { useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [searchType, setSearchType] = useState("multi");
  const [resultPage, setResultPage] = useState(1);
  return (
    <FilterContext.Provider
      value={{ searchType, resultPage, setResultPage, setSearchType }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
