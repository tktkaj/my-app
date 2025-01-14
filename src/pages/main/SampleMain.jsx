import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiddleBtn from "../../components/button/MiddleBtn";
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
      <BtnWraaper>
        <Link to="/samples/SampleDialog">
          <MiddleBtn type="button" color="#fff" bgColor="#5f0080" content="GO SampleDialog"></MiddleBtn>
        </Link>
        <Link to="/samples/SampleComponents">
          <MiddleBtn type="button" color="#fff" bgColor="#5f0080" content="GO SampleComponents"></MiddleBtn>
        </Link>
      </BtnWraaper>
    </BtnContainer>
  );
}

export default SampleMain;
