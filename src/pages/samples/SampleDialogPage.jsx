import React, { Component, useState } from "react";
import pop from "../../assets/popup.jpg";

import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import DialogBtn from "../../components/common/button/DialogBtn";
import useMovePage from "../../hooks/useMovePage";
import { usePopup } from "../../utils/PopupContext";

function SampleDialogPage() {
  const test = <h1>test</h1>;
  const testImg = <img src={pop} width="100px" height="100px"></img>;
  const [input, setInput] = useState("hello");
  const { showPopup } = usePopup();
  const { goBack, makeRequest } = useMovePage();

  return (
    <DialogContainer>
      <div>
        <KurlyBtn
          type="button"
          btnText="Alert"
          onClick={() => {
            showPopup("alert", {
              okBtnText: "확인",
              ContentComponent: () => testImg,
              callBack: () => {
                makeRequest("/samples/SampleComponents", {});
              },
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
              ContentComponent: () => <h3>hello</h3>,
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
              dialogText: "알림입니다.",
              ContentComponent: () => testImg,
            });
          }}
        ></KurlyBtn>
      </div>
      <h1 style={{ fontSize: "3rem" }}>{input}</h1>
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
