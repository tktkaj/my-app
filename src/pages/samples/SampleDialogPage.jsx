import React, { useState } from "react";
import pop from "../../assets/popup.jpg";

import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import DialogBtn from "../../components/common/button/DialogBtn";
import useMovePage from "../../hooks/useMovePage";
import { usePopup } from "../../utils/PopupContext";

function SampleDialogPage() {
  const testImg = <img src={pop} width="100px" height="100px"></img>;
  const [input, setInput] = useState("0");
  const { showPopup } = usePopup();
  const { goBack, makeRequest } = useMovePage();

  const customInput = (
    <div>
      <div style={{fontSize:"2rem"}}>현재 값: {input}</div>
    </div>
  );
  const dialogInput = (
    <input
      style={{ width: "300px", height: "50px", fontSize: "2rem" }}
      placeholder="값입력"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    ></input>
  );
  return (
    <DialogContainer>
      <div>
        <KurlyBtn
          type="button"
          btnText="Alert"
          onClick={() => {
            showPopup("alert", {
              okBtnText: "확인",
              ContentComponent: () => dialogInput,
            });
          }}
        ></KurlyBtn>
        <KurlyBtn
          type="button"
          btnText="Confirm"
          onClick={() => {
            showPopup("confirm", {
              dialogText: "알림입니다.",
              okBtnText: "확인",
              cancelBtnText: "취소",
            });
          }}
        ></KurlyBtn>
        <KurlyBtn
          type="button"
          btnText="Bottom-sheet"
          onClick={() => {
            showPopup("bottomSheet", {
              dialogText: "알림입니다.",
            });
          }}
        ></KurlyBtn>
        <KurlyBtn
          type="button"
          btnText="Center-PopUp"
          onClick={() => {
            showPopup("centerPopup", { dialogText: "알림입니다." });
          }}
        ></KurlyBtn>
        <KurlyBtn
          type="button"
          btnText="Full-PopUp"
          onClick={() => {
            showPopup("fullPopup", {
              ContentComponent: () => testImg,
            });
          }}
        ></KurlyBtn>
      </div>
      {customInput}
      <DialogBtn btnText="뒤로가기" onClick={() => goBack()}></DialogBtn>
    </DialogContainer>
  );
}
const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default SampleDialogPage;
