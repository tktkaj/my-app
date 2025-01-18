import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/layouts/header/Header";
import LoginForm from "../../components/marketkurly/login/LoginForm";
import Footer from "../../components/layouts/Footer";
function LoginPage() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleSetUserId = (inputText) => {
    setUserId(inputText);
    console.log(inputText);
  };

  const handleSetUserPw = (inputText) => {
    setUserPw(inputText);
    console.log(inputText);
  };

  const handleUserLogin = () => {
    console.log("유저로그인하는 함수");
    // 로그인 로직 추가
  };

  return (
    <LoginPageLayout>
      <Header />
      <LoginSection>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm
          userId={userId}
          userPw={userPw}
          onChangeUserId={handleSetUserId}
          onChangeUserPw={handleSetUserPw}
          onClick={handleUserLogin}
        />
      </LoginSection>
      <Footer />
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  width: 100%;
`;

const LoginSection = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h3`
  text-align: center;
`;

export default LoginPage;
