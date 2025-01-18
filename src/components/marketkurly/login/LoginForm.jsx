import React from "react";
import styled from "styled-components";
import BasicInput from "../../common/input/BasicInput";
import useMovePage from "../../../hooks/useMovePage";
import KurlyBtn from "../../common/button/KurlyBtn";

function LoginForm({ onClick, onChangeUserId, onChangeUserPw }) {
  const { makeRequest } = useMovePage();

  const handleFindId = (e) => {
    e.preventDefault();
    makeRequest("", {});
  };

  const handleFindPass = (e) => {
    e.preventDefault();
    makeRequest("", {});
  };
  const handleJoinUser = () =>{
    makeRequest("", {});
    console.log("회원가입으로 이동")
  }

  return (
    <LoginFormLayout>
      <LoginFormBox>
        <BasicInput
          type="text"
          placeholder="아이디를 입력해주세요"
          size="lg"
          onChange={onChangeUserId}
        />
        <BasicInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          size="lg"
          onChange={onChangeUserPw}
        />
      </LoginFormBox>
      <LoginUtilBox>
        <StyledLink href="/find-id" onClick={handleFindId}>
          아이디 찾기
        </StyledLink>
        <StyledLink href="/find-password" onClick={handleFindPass}>
          비밀번호 찾기
        </StyledLink>
      </LoginUtilBox>
      <StyledButtonBox>
        <KurlyBtn
          type="button"
          variant="purple"
          btnText="로그인"
          size="ml"
          onClick={onClick}
        >
          로그인
        </KurlyBtn>{" "}
        <KurlyBtn
          type="button"
          variant="outlinePurple"
          btnText="회원가입"
          size="ml"
          onClick={handleJoinUser}
        >
          로그인
        </KurlyBtn>{" "}
      </StyledButtonBox>
    </LoginFormLayout>
  );
}

const LoginFormLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginFormBox = styled.form``;

const LoginUtilBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: #333;
`;

const StyledButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default LoginForm;
