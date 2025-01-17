import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  height: 50px;
  padding: 10px;
  border: 1px solid #5f0080;
  border-radius: 10px;
  color: ${(props) => props.selectevaraint.color};
  background-color: ${(props) => props.selectevaraint.backgroundColor};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    opacity: 0.4;
  }
`;

/**
 * DialogBtn 컴포넌트는 사용자 정의 가능한 버튼을 렌더링합니다.
 *
 * @param {string} type - 버튼의 타입 (예: 'button', 'submit').
 * @param {string} variant - 버튼 스타일 변형 ('purple', 'outlinePurple' 등).
 * @param {string} btnText - 버튼에 표시될 텍스트.
 * @param {function} onClick - 버튼 클릭 시 호출될 함수.
 */
function DialogBtn({ type, variant, btnText, onClick }) {
  const variantObj = {
    purple: { color: "#fff", backgroundColor: "#5f0080" },
    outlinePurple: { color: "#5f0080", backgroundColor: "#fff" },
  };
  const selectevaraint = variantObj[variant] || variantObj.purple;
  return (
    <Button type={type} selectevaraint={selectevaraint} onClick={onClick}>
      {btnText}
    </Button>
  );
}

export default DialogBtn;
