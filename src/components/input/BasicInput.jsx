import React from "react";
import styled from "styled-components";

const InputOutline = styled.div`
  width: 309px;
  height: 22px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 15px;
`;

const Input = styled.input`
  margin-top: 2px;
  outline: none;
  border: none;
  width: 100%;
`;

function BasicInput({placeHolder}) {

  return (
    <InputOutline>
      <Input placeholder={placeHolder} />
    </InputOutline>
  );
}

export default BasicInput;
