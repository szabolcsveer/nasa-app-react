import React, { useState } from "react";
import "./Search.scss";

function Search(props: any) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      callSearchFunction(event)
    }
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    props.search(searchValue);
  }

  return (
    <div className="search">
      <input className="search-input" value={searchValue} onKeyDown={handleKeyPress} onChange={handleSearchInputChanges} type='text' />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </div>
  );
}

export default Search;
