import React, { useState } from "react";
import styled from "styled-components";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(searchValue);
  };

  const searchImg = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
      alt=""
    />
  );

  return (
    <SearchBarLayout>
      <StyledInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      <StyledIconButton type="button" onClick={handleButtonClick}>
        {searchImg}
      </StyledIconButton>
    </SearchBarLayout>
  );
}

const SearchBarLayout = styled.div`
  background-color: #eee;
  display: flex;
  padding: 10px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

const StyledIconButton = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
`;

export default SearchBar;
