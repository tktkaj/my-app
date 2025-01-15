import React from 'react'
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 46px;
  border: 1px solid #5f0080;
  border-radius: 5px;
  overflow: hidden;
`;

const SearchInputBox= styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px 15px;
  font-size: 1.2rem;
  outline: none;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

const SearchIcon = styled.img`
  width: 35px;
  height: 30px;
`;

function SearchInput() {
  return (
    <SearchContainer>
    <SearchInputBox type="text" placeholder="검색어를 입력해주세요" />
    <SearchButton>
      <SearchIcon 
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
        alt="검색"
      />
    </SearchButton>
  </SearchContainer>
  )
}

export default SearchInput