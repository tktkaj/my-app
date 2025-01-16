import React, { useState } from "react";
import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import Alert from "../../components/dialog/Alert";
import BottomSheet from "../../components/dialog/BottomSheet";
import CenterPopUp from "../../components/dialog/CenterPopUp";
import popup from "../../assets/popup.jpg";
import Confirm from "../../components/dialog/Confirm";
import FullPopUp from "../../components/dialog/FullPopUp";
import { openAlert } from "../../utils/actionDialog";

function SampleDialog() {
  return (
    <DialogContainer>
      <div>
        <KurlyBtn
          type="button"
          btnText="Alert"
          onClick={() => openAlert(Alert, "알람창입니다.")}
        ></KurlyBtn>
        <KurlyBtn type="button" btnText="Confirm"></KurlyBtn>
        <KurlyBtn type="button" btnText="Bottom-sheet"></KurlyBtn>
        <KurlyBtn type="button" btnText="Center-PopUp"></KurlyBtn>
        <KurlyBtn type="button" btnText="Full-PopUp"></KurlyBtn>
        {openAlert(BottomSheet, "알람창입니다.")}
      </div>
    </DialogContainer>
  );
}
const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default SampleDialog;
