import React from "react";
import styled from "styled-components";
import DialogBtn from "../common/button/DialogBtn";

function Confirm({
  ContentComponent,
  okBtnText,
  cancelBtnText,
  onClose,
  callBack,
}) {
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
          <DialogBtn
            variant="outlinePurple"
            btnText={cancelBtnText}
            onClick={handleConfirm}
          ></DialogBtn>
        </AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}
const DialogBackGround = styled.div`
  position: absolute;
  bottom: 0px;
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
  z-index: 1040;
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
  gap: 50px;
`;

export default Confirm;
