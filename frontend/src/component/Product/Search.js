import React, { Fragment, useState } from "react";
import "./Search.css";
import MetaData from "../layout/MetaData";

const Search = ({ history }) => {
  const [kk, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (kk.trim()) {
      // trim() will check if its not blank space
      history.push(`/products/${kk}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
