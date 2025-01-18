import React from "react";
import styled from "styled-components";
import UtilMenu from "../../layouts/header/UtilMenu";
import BrandNavigator from "./BrandNavigator";
import SearchBar from "./SearchBar";
import MyMenu from "./MyMenu";
import CategoryToggle from "./CategoryToggle";
import CategoryNav from "./CategoryNav";
import DeleveryNotice from "./DeleveryNotice";
function Header() {
  return (
    <HeaderLayout>
      <HeaderBox>
        <UtilMenuBox>
          <UtilMenu />
        </UtilMenuBox>
        <HeaderMiddleBox>
          <BrandNavigator />
          <SearchBar />
          <MyMenu />
        </HeaderMiddleBox>
        <CategoryBox>
          <CategoryToggle />
          <CategoryNav />
          <DeleveryNotice />
        </CategoryBox>
      </HeaderBox>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.header`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const HeaderBox = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const UtilMenuBox = styled.div`
  display: flex;
  justify-content: end;
`;
const HeaderMiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
