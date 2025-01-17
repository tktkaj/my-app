import React  from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

const DialogBackGround = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1030;
  background-color: black;
  opacity: 70%;
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

function BottomSheet({ dialogText, onClose, src }) {
  const handleConfirm = () => {
    onClose();
  };
  return (
    <DialogBackGround>
      <AlertContainer>
        <CancelBtn onClick={handleConfirm}>
          <img src={cancel} alt="" width="40px" />
        </CancelBtn>
        <AlertText>{dialogText}</AlertText>
        <AlertBtnWrapper>{src && <img src={src} alt="" />}</AlertBtnWrapper>
      </AlertContainer>
    </DialogBackGround>
  );
}

export default BottomSheet;
