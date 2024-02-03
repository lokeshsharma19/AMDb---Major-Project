import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [searchType, setSearchType] = useState("multi");
  const [searchTerm, setSearchTerm] = useState("");
  const [resultPage, setResultPage] = useState(1);
  const [resultType, setResultType] = useState("day");
  const [mediaType, setMediaType] = useState("all");
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
        mediaType,
        setMediaType,
      }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
