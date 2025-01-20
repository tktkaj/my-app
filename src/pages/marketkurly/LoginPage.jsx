import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginForm from "../../components/marketkurly/login/LoginForm";
import { usePopup } from "../../utils/PopupContext";
import useAuth from "../../hooks/useAuth";
import useMovePage from "../../hooks/useMovePage";
import { useSelector } from "react-redux";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const { showPopup } = usePopup();
  const { login } = useAuth();
  const { makeRequest } = useMovePage();
  const user = useSelector((state) => state.userInfo.id);
  const dialog = (
    <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
      "아이디와 비밀번호를 모두 입력해주세요."
    </h2>
  );

  const validateLogin = () => {
    if (!userId || !userPw) {
      showPopup("alert", { ContentComponent: () => dialog, okBtnText: "확인" });
      return false;
    }
    return true;
  };

  const handleSetUserId = (inputText) => {
    setUserId(inputText);
    console.log(inputText);
  };

  const handleSetUserPw = (inputText) => {
    setUserPw(inputText);
    console.log(inputText);
  };

  useEffect(() => {
    if (user) makeRequest("/FG/FGMK/FGMKHM/FGMKHM001", {});
  }, []);
  if (user) return null;

  const handleUserLogin = () => {
    if (validateLogin()) {
      if (userId === "FINGER" && userPw === "FINGER02") {
        login(userId);
        makeRequest("/FG/FGMK/FGMKHM/FGMKHM001", {});
      } else {
        showPopup("alert", {
          ContentComponent: () => (
            <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </h2>
          ),
          okBtnText: "확인",
        });
      }
    }
  };

  return (
    <LoginPageLayout>
      <LoginSection>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm
          onChangeUserId={handleSetUserId}
          onChangeUserPw={handleSetUserPw}
          onClick={handleUserLogin}
        />
      </LoginSection>
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
