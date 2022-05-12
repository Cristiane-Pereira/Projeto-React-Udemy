import React, { useState, Fragment  } from "react";

const SearchPosts = () => {
    const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <Fragment>
      <input
        type="search"
        placeholder="Pesquisar"
        onChange={handleChange}
        value={searchValue}
        searchValue={searchValue}
      />
      <br />
      <br />
    </Fragment>
  );
};

export default SearchPosts;
