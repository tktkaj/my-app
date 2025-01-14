import React from "react";
import styled from "styled-components";
import CouponBanner from "../../layouts/CouponBanner";
import Header from "../../layouts/Header";
import BasicInput from "../../components/input/BasicInput";
import MiddleBtn from "../../components/button/MiddleBtn";
import Footer from "../../layouts/Footer"

const LoginContainer = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 60px;
`;

const LoginTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;
const BoxWraper = styled.form`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const FindBox = styled.div`
  font-size: 0.9rem;
  padding-left: 200px;
  padding-top: 10px;
`;
const CommonSpan = styled.span`
  font-size: 0.9rem;
  color: #333;
`;
const SeparatorSpan = styled.span`
  font-size: 0.7rem;
  color: #333;
  border-right: 1px solid #333;
  margin: 0 5px;
`;

function LoginPage() {
  return (
    <>
    <CouponBanner/>
    <Header/>
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <BoxWraper>
        <BasicInput placeHolder={"아이디를 입력해주세요"} />
        <BasicInput placeHolder={"비밀번호를 입력해주세요"} />
        <FindBox>
          <CommonSpan>아이디 찾기</CommonSpan>
          <SeparatorSpan></SeparatorSpan>
          <CommonSpan>비밀번호 찾기</CommonSpan>
        </FindBox>
      </BoxWraper>
      <BoxWraper>
        <MiddleBtn color={"white"} content={"로그인"} bgColor={"#5f0080"} />
        <MiddleBtn color={"#5f0080"} content={"회원가입"} bgColor={"#fff"} />
      </BoxWraper>
    </LoginContainer>
    <Footer></Footer>
    </>
  );
}

export default LoginPage;
