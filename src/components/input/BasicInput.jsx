import React from "react";
import styled from "styled-components";

const InputOutline = styled.div`
  width: ${(props) => {
    switch (props.type) {
      case "join":
        return "333px";
      case "login":
        return "340px";
      default:
        return "333px";
    }
  }};
  height: ${(props) => {
    switch (props.type) {
      case "join":
        return "46px";
      case "login":
        return "48px";
      default:
        return "46px";
    }
  }};
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  overflow: hidden;
`;

const Input = styled.input`
  margin-top: 2px;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 11px 1px 15px;
  font-size: ${(props) => {
    switch (props.type) {
      case "join":
        return "1.1rem";
      case "login":
        return "1.05rem";
      default:
        return "1.1rem";
    }
  }};
`;

function BasicInput({ placeHolder, type }) {
  return (
    <InputOutline type={type}>
      <Input type={type} placeholder={placeHolder} maxLength="20" />
    </InputOutline>
  );
}

export default BasicInput;
