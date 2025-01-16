import React, { useState } from "react";
import styled from "styled-components";
import DialogBtn from "../common/button/DialogBtn";
import { closeDialog } from "../../utils/actionDialog";

const DialogBackGround = styled.div`
  position: absolute;
  top: 0px;
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
  right: 50%;
  width: 360px;
  height: 200px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
function Alert({ value }) {
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
        </AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}

export default Alert;
