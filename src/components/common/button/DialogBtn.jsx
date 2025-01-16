import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  height: 50px;
  padding: 10px;
  border: 1px solid #5f0080;
  border-radius: 10px;
  color: ${(props) => props.selectevaraint.color};
  background-color: ${(props) => props.selectevaraint.backgroundColor};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    opacity: 0.4;
  }
`;
function DialogBtn({ type, variant, value, onClick }) {
  const variantObj = {
    purple: { color: "#fff", backgroundColor: "#5f0080" },
    outlinePurple: { color: "#5f0080", backgroundColor: "#fff" },
  };
  const selectevaraint = variantObj[variant] || variantObj.purple;
  return (
    <Button type={type} selectevaraint={selectevaraint} onClick={onClick}>
      {value}
    </Button>
  );
}

export default DialogBtn;
