import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fc};
  border: 1px solid #5f0080;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 4px;
`;

function KurlyBtn({ variant, type, value, size, disable }) {

  const form = {
    sm: { width: "240px", height: "56px" },
    ml: { width: "350px", height: "54px" },
    lg: { width: "432px", height: "56px" },
  };
  const color = {
    purple: { bg: "#5f0080", fc: "#fff" },
    white: { bg: "#fff", fc: "#5f0080" },
  };

  const selectedColor = color[variant] || color.purple;
  const selectedSize = form[size] || form.sm;

  return (
    <Button
      type={type}
      size={form[size]}
      width={selectedSize.width}
      height={selectedSize.height}
      bg={selectedColor.bg}
      fc={selectedColor.fc}
      disable={disable}
    >
      {value}
    </Button>
  );
}

export default KurlyBtn;
