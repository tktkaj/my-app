import React from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

function BottomSheet({ onClose, callBack, ContentComponent }) {
  const handleConfirm = () => {
    onClose(callBack);
  };
  return (
    <DialogBackGround>
      <AlertContainer>
        <CancelBtn onClick={handleConfirm}>
          <img src={cancel} alt="" width="40px" />
        </CancelBtn>
        {ContentComponent && <ContentComponent />}
        <AlertBtnWrapper></AlertBtnWrapper>
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
  bottom: 0px;
  transition: 1s ease;
  z-index: 1040;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: block;
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

export default BottomSheet;
