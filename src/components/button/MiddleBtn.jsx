import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 340px;
  height: 54px;
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    color: #5f0080;
    background-color: #fff;
    border: 1px solid #5f0080;
  }
`


function MiddleBtn({color, bgColor, content, borderColor, onClick}) {
  return (
    <Button color={color} bgColor={bgColor} onClick={onClick} borderColor={borderColor}>
      {content}
    </Button>
  )
}

export default MiddleBtn;