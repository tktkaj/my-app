import React, { useState } from "react";
import styled from "styled-components";

const StyledContainerDiv = styled.div`
  width: 432px;
  border: 1px solid #f4f4f4;
  position: relative;
`;

const StyledSelectDiv = styled.div`
  position: relative;
  padding: 14px 16px 12px 15px;
  font-size: 0.9rem;
  border: 1px solid #f4f4f4;
`;
const StyledProductUl = styled.ul`
  width: 100%;
  padding: 0;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  display: ${(props) => (props.isClick ? "block" : "none")};
`;

const StyledProductLi = styled.li`
  padding: 16.5px 22px 16.5px 14px;
  font-size: 0.9rem;
  border: 1px solid #f4f4f4;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledSvg = styled.svg`
  position: absolute;
  top: 11px;
  right: 10px;
  width: 20px;
`;
const StyledSpan = styled.span`
  font-size: 0.9rem;
`;
const StyldPriceWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledOrigianlPriceDiv = styled.div`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: #b5b5b5;
`;
const StyledDiscountPriceDiv = styled.div`
  font-size: 0.9rem;
`;
function Select({ products, value }) {
  let [isClick, setIsClick] = useState(false);
  const handleSelectorClick = () => {
    setIsClick(isClick ? false : true);
  };
  return (
    <StyledContainerDiv>
      <StyledSelectDiv>
        {value}
        <StyledSvg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDropDownIcon"
          onClick={handleSelectorClick}
        >
          <path d="M7 10l5 5 5-5z"></path>
        </StyledSvg>
      </StyledSelectDiv>
      <StyledProductUl isClick={isClick}>
        {products.map((product, index) => (
          <StyledProductLi key={product.name + index}>
            <StyledSpan>{product.name}</StyledSpan>
            <StyldPriceWrapper>
              <StyledOrigianlPriceDiv>
                {product.originalPrice}
              </StyledOrigianlPriceDiv>
              <StyledDiscountPriceDiv>
                {product.salePrice}
              </StyledDiscountPriceDiv>
            </StyldPriceWrapper>
          </StyledProductLi>
        ))}
      </StyledProductUl>
    </StyledContainerDiv>
  );
}

export default Select;
