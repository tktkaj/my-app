import React from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1040;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: ${(props) => props.display};
`;

const AlertText = styled.div`
  position: absolute;
  z-index: 1050;
  font-size: 3rem;
  text-align: center;
  margin-top: 50px;
  top: 50px;
  right: 100px;
  color: #fff;
`;

const AlertBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
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

function FullPopUp({ display, handleCancle }) {
  return (
    <AlertContainer display={display}>
      {/* <img
        src={fullpopup}
        alt=""
        width="98%"
        height="98%"
        style={{ position: "relative" }}
      /> */}
      <CancelBtn onClick={handleCancle}>
        <img src={cancel} alt="" width="40px" />
      </CancelBtn>
      <AlertText>
        이 창은{" "}
        <span
          style={{ fontSize: "3rem", color: "#5f0080", fontWeight: "bold" }}
        >
          FullPopUp
        </span>
        입니다.
      </AlertText>
      <AlertBtnWrapper></AlertBtnWrapper>
    </AlertContainer>
  );
}

export default FullPopUp;
