import React from "react";
import styled from "styled-components";
import cancel from "../../assets/cancel.png";

function FullPopUp({ ContentComponent, onClose, callBack }) {
  const handleConfirm = () => {
    onClose(callBack);
  };
  return (
    <AlertContainer>
      <CancelBtn onClick={handleConfirm}>
        <img src={cancel} alt="" width="40px" />
      </CancelBtn>
      <AlertBtnWrapper>
        {ContentComponent && <ContentComponent />}
      </AlertBtnWrapper>
    </AlertContainer>
  );
}
const AlertContainer = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 1040;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AlertText = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-top: 200px;
  color: #333;
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

export default FullPopUp;
