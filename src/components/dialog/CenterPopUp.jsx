import React, { useState } from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";
import { closeDialog } from "../../utils/actionDialog";

const DialogBackGround = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1030;
  background-color: black;
  opacity: 70%;
  display: ${(props) => props.show};
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1040;
  width: 20%;
  height: 60%;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: block;
`;

const AlertText = styled.div`
  position: relative;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
`;

const AlertBtnWrapper = styled.div`
  display: flex;
  height: 70%;
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
  top: -45px;
  right: 5px;
  cursor: pointer;
`;

function CenterPopUp({ value, src }) {
  const [show, setShow] = useState("block");
  return (
    <DialogBackGround show={show}>
      <AlertContainer>
        <AlertText>
          <CancelBtn
            onClick={() => {
              setShow(closeDialog());
            }}
          >
            <img src={cancel} width="100%" alt="" />
          </CancelBtn>
          {value}
        </AlertText>
        <AlertBtnWrapper>
          <img src={src} width="100%" height="100%" alt="" />
        </AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}

export default CenterPopUp;
