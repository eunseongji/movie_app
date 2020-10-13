import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="form">
      <input type="search" />
      <input type="submit" value="찾기" />
    </div>
  );
}

export default Search;
