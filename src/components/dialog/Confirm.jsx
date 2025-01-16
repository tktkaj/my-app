import React, { useState } from "react";
import styled from "styled-components";
import DialogBtn from "../common/button/DialogBtn";
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
  width: 360px;
  height: 200px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
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
  gap: 50px;
`;

function Confirm({ value }) {
  const [show, setShow] = useState("block");
  return (
    <DialogBackGround show={show}>
      <AlertContainer>
        <AlertText>{value}</AlertText>
        <AlertBtnWrapper>
          <DialogBtn
            variant="purple"
            value="check"
            onClick={() => {
              setShow(closeDialog());
            }}
          ></DialogBtn>
          <DialogBtn
            variant="outlinePurple"
            value="check"
            onClick={() => {
              setShow(closeDialog());
            }}
          ></DialogBtn>
        </AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}

export default Confirm;
