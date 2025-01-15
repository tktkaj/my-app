import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #fff;
  color: ${(props) => props.color};
  border: 1px solid #ababab;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 138px;
  height: 38px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
`

function SmallWhiteBtn({content, onClick}) {
  return (
    <Button>
        {content}
    </Button>
  )
}

export default SmallWhiteBtn