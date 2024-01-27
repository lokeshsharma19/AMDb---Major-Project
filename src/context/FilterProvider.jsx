import React, { createContext, useContext } from "react";
import { useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [searchType, setSearchType] = useState("multi");
  const [searchTerm, setSearchTerm] = useState("");
  const [resultPage, setResultPage] = useState(1);
  const [resultType, setResultType] = useState("day");
  return (
    <FilterContext.Provider
      value={{
        searchType,
        resultPage,
        setResultPage,
        setSearchType,
        searchTerm,
        setSearchTerm,
        resultType,
        setResultType,
      }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
