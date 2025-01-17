import React from "react";
import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import DialogBtn from "../../components/common/button/DialogBtn";
import { useBackward } from "../../hooks/useBackward";
import { usePopup } from "../../utils/PopupContext";

function SampleDialogPage() {
  const { showPopup } = usePopup();
  const goback = useBackward();
  return (
    <DialogContainer>
      <div>
        <KurlyBtn
          type="button"
          btnText="Alert"
          onClick={() => {
            showPopup("alert", { dialogText: "알림입니다.", okBtnText:"확인" });
          }}
        ></KurlyBtn>
        <KurlyBtn
          type="button"
          btnText="Confirm"
          onClick={() => {
            showPopup("confirm", { dialogText: "알림입니다.",okBtnText:"확인", cancelBtnText:"취소" });
          }}
        ></KurlyBtn>
        <KurlyBtn type="button" btnText="Bottom-sheet"
         onClick={() => {
          showPopup("bottomSheet", { dialogText: "알림입니다." });
        }}></KurlyBtn>
        <KurlyBtn type="button" btnText="Center-PopUp"
         onClick={() => {
          showPopup("centerPopup", { dialogText: "알림입니다." });
        }}></KurlyBtn>
        <KurlyBtn type="button" btnText="Full-PopUp"
         onClick={() => {
          showPopup("fullPopup", { dialogText: "알림입니다." });
        }}></KurlyBtn>
      </div>
      <DialogBtn btnText="뒤로가기" onClick={() => goback()}></DialogBtn>
    </DialogContainer>
  );
}
const DialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default SampleDialogPage;
