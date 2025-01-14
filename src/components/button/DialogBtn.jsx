import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  color: ${(props)=> props.color};
  background-color: ${(props)=> props.bgColor};
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
function DialogBtn({ content, bgColor, color, handleCancle }) {
  return (
    <Button content={content} bgColor={bgColor} color={color} onClick={handleCancle}>
      {content} 
    </Button>
  );
}

export default DialogBtn;
