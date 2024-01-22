import React, { useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setResultPage } = useFilter();
  const submit = useSubmit();
  return (
    // by default Form will search request with searched parameter?search=marvel
    <Form
      method="GET"
      action="/search"
      onChange={() => {
        setResultPage(1);
      }}>
      <input type="text" name="search" id="search" />
    </Form>
  );
}

export default SearchForm;
