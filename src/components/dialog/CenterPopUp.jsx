import React from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

function CenterPopUp({ onClose, callBack, ContentComponent }) {
  const handleConfirm = () => {
    onClose(callBack);
  };
  return (
    <DialogBackGround>
      <AlertContainer>
        <AlertText>
          <CancelBtn onClick={handleConfirm}>
            <img src={cancel} width="100%" alt="" />
          </CancelBtn>
          {ContentComponent && <ContentComponent />}
        </AlertText>
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
  width: 80%;
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

export default CenterPopUp;
