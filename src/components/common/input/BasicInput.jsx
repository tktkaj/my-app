import React from "react";
import styled from "styled-components";

const InputOutline = styled.div`
  width: ${(props) => props.SelectInputSize.width};
  height: ${(props) => props.SelectInputSize.height};
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
  font-size: ${(props) => props.SelectInputSize.fontSize};
`;

/**
 * name BasicInput
 * @param onChange
 */
function BasicInput({ size, type, placeholder, onChange }) {
  const inputSize = {
    lg: { width: "333px", height: "46px", fontSize: "1.1rem" },
    ml: { width: "340px", height: "48px", fontSize: "1.05rem" },
  };

  const SelectInputSize = inputSize[size] || inputSize.lg;
  return (
    <InputOutline SelectInputSize={SelectInputSize}>
      <Input
        placeholder={placeholder || "placeholder"}
        SelectInputSize={SelectInputSize}
        maxLength="20"
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputOutline>
  );
}

export default BasicInput;
