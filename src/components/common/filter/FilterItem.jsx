import React, { useState } from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
`;
const StyledA = styled.a``;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2px;
`;
const StyledCategoryButton = styled.button`
  background-color: #fff;
  border: none;
  display: ${(props) => (props.type === "category" ? "flex" : "none")};
  align-items: center;
  padding: 0;
  margin-right: 7px;
  cursor: pointer;
`;
const StyledPriceButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 0;
  margin-right: 7px;
  display: ${(props) => (props.type === "price" ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
`;
const StyledCateogrySpan = styled.span`
  font-size: 1.05rem;
  color: #333;
  margin-right: 4px;
`;
const StyledCountSpan = styled.span`
  font-size: 0.95rem;
  color: #ccc;
`;

function FilterItem({ type, content }) {
  let [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = (e) => {
    e.preventDefault();
    setIsChecked(isChecked ? false : true);
  };
  return (
    <StyledLi onClick={handleIsChecked}>
      <StyledA href="">
        <StyledDiv>
          <StyledCategoryButton type={type}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isChecked
                    ? "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    : "M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                }
                fill={isChecked ? "#5f0080" : "none"}
                stroke={isChecked ? "none" : "#ddd"}
              />
              <path
                d="M7 12.6667L10.3846 16L18 8.5"
                stroke={isChecked ? "#fff" : "#ddd"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </StyledCategoryButton>
          <StyledPriceButton type={type}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isChecked
                    ? "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                    : "M12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                }
                fill={isChecked ? "#5f0080" : "#fff"}
                stroke={isChecked ? "none" : "#ddd"}
              />
              {isChecked && (
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  fill="#fff"
                />
              )}
            </svg>
          </StyledPriceButton>
          <StyledCateogrySpan>{content}</StyledCateogrySpan>
          <StyledCountSpan>17</StyledCountSpan>
        </StyledDiv>
      </StyledA>
    </StyledLi>
  );
}

export default FilterItem;
