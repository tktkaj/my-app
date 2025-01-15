import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #BD76FF;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    left: 10px;
`;
const StyledP = styled.p`
    margin: 0;
    color: #fff;
    font-size: 1.07rem;
`;
function Coupon({content}) {
  return (
    <StyledDiv>
      <StyledP>{content}</StyledP>
    </StyledDiv>
  );
}

export default Coupon;
