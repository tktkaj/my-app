import React from "react";
import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import useMovePage from "../../hooks/useMovePage";

function SampleMainPage() {
  const { makeRequest } = useMovePage();

  return (
    <BtnContainer>
      <BtnWraaper>
        <KurlyBtn
          btnText="dialog"
          variant="white"
          size="ml"
          onClick={() =>
            makeRequest("/samples/SampleDialog", {
              name: "dkdk",
            })
          }
        ></KurlyBtn>
        <KurlyBtn
          btnText="component"
          variant="purple"
          size="ml"
          onClick={() =>
            makeRequest("/samples/SampleComponents", { name: "dkdk" })
          }
        ></KurlyBtn>
      </BtnWraaper>
    </BtnContainer>
  );
}
const BtnContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const BtnWraaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 350px;
`;

export default SampleMainPage;
