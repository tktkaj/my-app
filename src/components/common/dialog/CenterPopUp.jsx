import React from "react";
import styled from "styled-components";
import popup from "../../assets/popup.jpg";
import cancel from "../../assets/cancel.png";

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1040;
  width: 400px;
  height: 600px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: ${(props) => props.display};
`;

const AlertText = styled.div`
  position: relative;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
`;

const AlertBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
`;
const CancelBtn = styled.button`
    position: absolute;
    background-color: rgba(0,0,0,0);
    border: none;
    width: 40px;
    height: 40px;
    top: -45px;
    right: 5px;
    cursor: pointer;
`;

function CenterPopUp({ display, handleCancle }) {
  return (
    <AlertContainer display={display}>
      <AlertText>
        <CancelBtn onClick={handleCancle}>
            <img src={cancel} width="100%" alt="" />
        </CancelBtn>
        이 창은{" "}
        <span
          style={{ fontSize: "2rem", color: "#5f0080", fontWeight: "bold" }}
        >
          CenterPopUp
        </span>
        입니다.
      </AlertText>
      <AlertBtnWrapper>
        <img src={popup} width="300px" height="400px" alt="" />
      </AlertBtnWrapper>
    </AlertContainer>
  );
}

export default CenterPopUp;
