import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bgc};
  color: ${(props) => props.color};
  border: 1px solid #5f0080;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "240px";
      case "middle":
        return "350px";
      case "large":
        return "432px";
      default:
        return "350px";
    }
  }};
  height: ${(props) => (props.size === "middle" ? "54px" : "56px")};
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 4px;

  /* &:hover {
    color: #5f0080;
    background-color: #fff;
    border: 1px solid #5f0080;
  } */
`;

function KurlyBtn({ color, bgc, size, content, onClick }) {
  return (
    <Button color={color} bgc={bgc} onClick={onClick} size={size}>
      {content}
    </Button>
  );
}

export default KurlyBtn;
