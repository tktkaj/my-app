import React from "react";
import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import { useNavigate } from "react-router-dom";

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

function SampleMain() {
  const navigate = useNavigate();

  return (
    <BtnContainer>
      <BtnWraaper>
        <KurlyBtn
          value="SampleDialog"
          variant="white"
          size="ml"
          onClick={() => navigate("/samples/SampleDialog")}
        ></KurlyBtn>
        <KurlyBtn
          value="SampleComponents"
          variant="purple"
          size="ml"
          onClick={() => navigate("/samples/SampleComponents")}
        ></KurlyBtn>
        <KurlyBtn
          value="SampleComponents"
          variant="purple"
          size="ml"
          onClick={() => navigate("/test")}
        ></KurlyBtn>
      </BtnWraaper>
    </BtnContainer>
  );
}

export default SampleMain;
