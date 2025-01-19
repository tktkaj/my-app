import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import CategoryToggle from "../header/CategoryToggle";
import CategoryNav from "../header/CategoryNav";
import MyMenu from "../header/MyMenu";
function StickyHeader() {
  return (
    <StickyHeaderLayout>
      <StyickHeaderBox>
        <CategoryToggle />
        <CategoryNav />
        <SearchBar />
        <MyMenu />
      </StyickHeaderBox>
    </StickyHeaderLayout>
  );
}

const StickyHeaderLayout = styled.div`
  width: 100%;
`;
const StyickHeaderBox = styled.div`
  margin: 0 auto;
  width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default StickyHeader;
