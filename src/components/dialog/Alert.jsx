import React from "react";
import styled from "styled-components";
import DialogBtn from "../button/DialogBtn"

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1040;
  width: 360px;
  height: 200px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: ${(props)=>props.display};
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
`
function Alert({display, handleCancle}) {
  return (
    <AlertContainer display={display}>
      <AlertText>
        이 창은{" "}
        <span
          style={{ fontSize: "2rem", color: "#5f0080", fontWeight: "bold" }}
        >
          Alert창
        </span>
        입니다.
      </AlertText>
    <AlertBtnWrapper>
      <DialogBtn color={"#fff"} bgColor={"#5f0080"} content={"Check"} handleCancle={handleCancle}></DialogBtn>
    </AlertBtnWrapper>
    </AlertContainer>
  );
}

export default Alert;
