import React from "react";
import styled from "styled-components";

const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;
// const DialogBackGround = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   z-index: 1030;
//   background-color: black;
//   opacity: 70%;
//   display: ${(props) => props.bgDisplay};
// `;

function SampleDialog() {
  return (
    <DialogContainer>
    </DialogContainer>
  );
}

export default SampleDialog;
