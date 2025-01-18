import React from "react";
import styled from "styled-components";
import DialogBtn from "../common/button/DialogBtn";

function Alert({ ContentComponent, okBtnText, callBack, onClose }) {
  const handleConfirm = () => {
    onClose(callBack);
  };
  return (
    <DialogBackGround>
      <AlertContainer>
        {ContentComponent && <ContentComponent />}
        <AlertBtnWrapper>
          <DialogBtn
            variant="purple"
            btnText={okBtnText}
            onClick={handleConfirm}
          ></DialogBtn>
        </AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}
const DialogBackGround = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1030;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 200px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;


const AlertBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export default Alert;
