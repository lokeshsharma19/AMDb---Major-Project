import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";
import styles from "./SearchForm.module.css";

function SearchForm() {
  const { setResultPage, resultPage, setSearchTerm } = useFilter();
  const navigate = useNavigate();

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.call(this, ...args);
      }, delay);
    };
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    navigate(`/search?search=${value}`);
  };

  const debouncedHandling = debounce(handleChange, 500);

  return (
    // by default Form will search request with searched parameter?search=marvel
    <input
      type="text"
      name="search"
      id="search"
      placeholder="search for a movie, tv show, person"
      className={`container ${styles.form}`}
      onChange={(e) => {
        debouncedHandling(e.target.value);
      }}
    />
    // <Form
    //   method="GET"
    //   action="/search"
    //   onChange={(e) => {
    //     //yaha laga denge debiunce
    //
    //
    //   }}
    //   >
    // </Form>
  );
}

export default SearchForm;
