import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #eeeeee;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 138px;
  height: 38px;
  font-size: 1.17rem;
  cursor: pointer;
  border-radius: 4px;
`;

function SmallWhiteBtn({ value, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {value}
    </Button>
  );
}

export default SmallWhiteBtn;
