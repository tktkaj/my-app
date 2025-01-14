import React, { useState } from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

const AlertContainer = styled.div`
  position: absolute;
  bottom: ${(props)=>props.y};
  transition: 1s ease;
  z-index: 1040;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: ${(props) => props.display};
`;

const AlertText = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
`;

const AlertBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const CancelBtn = styled.button`
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 25px;
  cursor: pointer;
`;

function BottomSheet({ display, handleCancle}) {
let [y, setY] = useState("0px");
  return (
    <AlertContainer display={display} y={y}>
      <CancelBtn onClick={handleCancle}>
        <img src={cancel} alt="" width="40px" />
      </CancelBtn>
      <AlertText>
        이 창은{" "}
        <span
          style={{ fontSize: "2rem", color: "#5f0080", fontWeight: "bold" }}
        >
          BottomSheet창
        </span>
        입니다.
      </AlertText>
      <AlertBtnWrapper></AlertBtnWrapper>
    </AlertContainer>
  );
}

export default BottomSheet;
