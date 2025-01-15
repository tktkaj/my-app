import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KurlyBtn from "../../components/button/KurlyBtn";
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
  return (
    <BtnContainer>
      <KurlyBtn>
        <Link to="/samples/SampleDialog">
          <KurlyBtn type="button" color="#fff" bgColor="#5f0080" content="GO SampleDialog"></KurlyBtn>
        </Link>
        <Link to="/samples/SampleComponents">
          <KurlyBtn type="button" color="#fff" bgColor="#5f0080" content="GO SampleComponents"></KurlyBtn>
        </Link>
      </KurlyBtn>
    </BtnContainer>
  );
}

export default SampleMain;
