import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #bd76ff;
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
function Coupon({ content, disable }) {
  return <StyledDiv>{disable && <StyledP>{content}</StyledP>}</StyledDiv>;
}

export default Coupon;
