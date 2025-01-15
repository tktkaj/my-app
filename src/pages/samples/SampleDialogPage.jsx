import React, { use, useEffect, useState } from "react";
import styled from "styled-components";


const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;
const DialogBackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1030;
  background-color: black;
  opacity: 70%;
  display: ${(props) => props.bgDisplay};
`;

function SampleDialog() {

  let [bgDisplay, setBgDisplay] = useState("none");
  let [alert, setAlert] = useState("none");
  let [confirm, setConfirm] = useState("none");
  let [centerPopUp, setCenterPopUp] = useState("none");
  let [fullPopUp, setFullPopUp] = useState("none");
  let [bottomSheet, setBottomSheet] = useState("none");

  const handleCancelPopup = () => {
    setBgDisplay("none");
    setAlert("none");
    setConfirm("none");
    setCenterPopUp("none");
    setFullPopUp("none");
    setBottomSheet("none");
  };
  const handleShowAlert = () => {
    setBgDisplay("block");
    setAlert("block");
  };
  const handleShowConfirm = () => {
    setBgDisplay("block");
    setConfirm("block");
  };
  const handleShowCenter = () => {
    setBgDisplay("block");
    setCenterPopUp("block");
  };
  const handleShowFull = () => {
    setBgDisplay("block");
    setFullPopUp("block");
  };

  const handleShowBottom = () => {
    setBgDisplay("block");
    setBottomSheet("block");
  };

  return (
    <DialogContainer>
      dialog페이지입니다.
      {/* <DialogBackGround bgDisplay={bgDisplay}></DialogBackGround>
      <Alert display={alert} handleCancle={handleCancelPopup}></Alert>
      <Confirm display={confirm} handleCancle={handleCancelPopup}></Confirm>
      <CenterPopUp
        display={centerPopUp}
        handleCancle={handleCancelPopup}
      ></CenterPopUp>
      <FullPopUp
        display={fullPopUp}
        handleCancle={handleCancelPopup}
      ></FullPopUp>
      <BottomSheet
        display={bottomSheet}
        handleCancle={handleCancelPopup}
      ></BottomSheet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <KurlyBtn
          bgc="#5f0080"
          content={"Alert"}
          onClick={handleShowAlert}
        ></KurlyBtn>
        <KurlyBtn
          bgc="#5f0080"
          content={"Confirm"}
          onClick={handleShowConfirm}
        ></KurlyBtn>
        <KurlyBtn
          bgc="#5f0080"
          content={"Center Pop-up"}
          onClick={handleShowCenter}
        ></KurlyBtn>
        <KurlyBtn
          bgc="#5f0080"
          content={"Full Pop-up"}
          onClick={handleShowFull}
        ></KurlyBtn>
        <KurlyBtn
          bgc="#5f0080"
          content={"Bottom Sheet"}
          onClick={handleShowBottom}
        ></KurlyBtn>
      </div> */}
    </DialogContainer>
  );
}

export default SampleDialog;
